describe('Patient Creation Flow (Mocked)', () => {
    beforeEach(() => {
        // Mock the initial empty list of patients
        cy.intercept('GET', '**/api/patients*', {
            statusCode: 200,
            body: []
        }).as('getPatients');

        cy.visit('/patients');
    });

    it('should successfully create a new valid patient and see it in the list', () => {
        // 1. Abrir Modal de Creación
        cy.contains('button', '+ Nuevo Paciente').click();
        cy.get('.form-section').should('be.visible');
        cy.contains('h2', 'Crear Nuevo Paciente').should('be.visible');

        const uniqueDni = `1234${Date.now().toString().slice(-4)}A`;
        const newPatientMock = {
            id: "123e4567-e89b-12d3-a456-426614174000",
            name: "TestPaciente",
            lastName: "Automático",
            dni: uniqueDni,
            phone: "600123456",
            email: "test@cypress.com",
            birthDate: "1990-01-01",
            allergies: "",
            createdAt: new Date().toISOString(),
            records: 0,
            notes: 0,
            activeDiagnoses: 0,
            completedDiagnoses: 0
        };

        // Intercept POST request for creation
        cy.intercept('POST', '**/api/patients*', {
            statusCode: 201,
            body: newPatientMock
        }).as('createPatient');

        // After creation, the component loads patients again. So we update the GET mock.
        cy.intercept('GET', '**/api/patients*', {
            statusCode: 200,
            body: [newPatientMock]
        }).as('getPatientsAfterCreate');

        // 2. Rellenar formulario (Happy Path)
        cy.get('input[formControlName="name"]').type('TestPaciente');
        cy.get('input[formControlName="lastName"]').type('Automático');
        cy.get('input[formControlName="email"]').type('test@cypress.com');
        cy.get('input[formControlName="phone"]').type('600123456');
        cy.get('input[formControlName="dni"]').type(uniqueDni);
        cy.get('input[formControlName="birthDate"]').type('1990-01-01');

        // 3. Guardar
        cy.contains('button', 'Crear').click();

        // 4. Comprobaciones de UI y Red
        cy.wait('@createPatient');
        cy.wait('@getPatientsAfterCreate');

        // 5. Verificar que aparece en la tabla
        cy.get('.patients-table').should('contain', 'TestPaciente')
            .and('contain', 'Automático')
            .and('contain', uniqueDni);
    });

    it('should prevent creation and show errors on empty required fields', () => {
        // Abrir Modal
        cy.contains('button', '+ Nuevo Paciente').click();
        cy.get('.form-section').should('be.visible');
        // Tocar el campo nombre y salir sin escribir
        cy.get('input[formControlName="name"]').focus().blur();

        // Verificar que aparece el error
        cy.get('input[formControlName="name"]').should('have.class', 'is-invalid');
        cy.contains('.error-message', 'Este campo es requerido').should('be.visible');

        // El botón en este diseño de componente no está deshabilitado físicamente, sino que su método 
        // verifica formSubmitted || invalid, así que podemos hacer click y comprobar que no pasa nada
        cy.contains('button', 'Crear').click();
        cy.get('input[formControlName="name"]').should('have.class', 'is-invalid');
    });
});
