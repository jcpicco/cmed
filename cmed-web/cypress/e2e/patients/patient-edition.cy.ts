describe('Patient Edition Flow (Mocked)', () => {
    const mockPatient = {
        id: "223e4567-e89b-12d3-a456-426614174001",
        name: "Test",
        lastName: "Original",
        dni: "12345678X",
        phone: "600000000",
        email: "original@test.com",
        birthDate: "1980-01-01",
        allergies: "Ninguna",
        createdAt: new Date().toISOString(),
        records: 0,
        notes: 0,
        activeDiagnoses: 0,
        completedDiagnoses: 0
    };

    beforeEach(() => {
        // Intercept initial load
        cy.intercept('GET', '**/api/patients*', {
            statusCode: 200,
            body: [mockPatient]
        }).as('getPatients');

        // Detalle del paciente al hacer click en la fila
        cy.intercept('GET', `**/api/patients/${mockPatient.id}`, {
            statusCode: 200,
            body: mockPatient
        }).as('getPatientDetail');

        // Pestañas cargarán al entrar al detalle
        cy.intercept('GET', `**/api/patients/${mockPatient.id}/medical-records`, { body: [] });
        cy.intercept('GET', `**/api/patients/${mockPatient.id}/previous-records`, { body: [] });
        cy.intercept('GET', `**/api/patients/${mockPatient.id}/notes`, { body: [] });

        cy.visit('/patients');
        cy.wait('@getPatients');
    });

    it('should open edit modal, update data and save', () => {
        // Encontrar el paciente abriendo los detalles (haciendo click en la fila)
        cy.get('table tbody tr:first-child.clickable').click({ force: true });
        cy.wait('@getPatientDetail');

        // Botón editar dentro de detalles
        cy.contains('.details-actions button', 'Editar').click();

        cy.get('.modal-content').should('be.visible');
        cy.contains('h2', 'Editar Paciente').should('be.visible');

        // Modificamos
        const newPhone = '600' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        cy.get('input[formControlName="phone"]').clear().type(newPhone);

        // Preparamos mock de la actualización
        const updatedPatient = { ...mockPatient, phone: newPhone };
        cy.intercept('PATCH', `**/api/patients/${mockPatient.id}*`, {
            statusCode: 200,
            body: updatedPatient
        }).as('updatePatient');

        cy.intercept('GET', `**/api/patients/${mockPatient.id}`, {
            statusCode: 200,
            body: updatedPatient
        }).as('getPatientDetailAfterUpdate');

        // Guardar
        cy.contains('button', 'Guardar').click();

        cy.wait('@updatePatient');
        cy.wait('@getPatientDetailAfterUpdate');

        // Cerrar modal o comprobar que ya no está visible (la UI lo cierra automáticamente tras un PATCH 200)
        cy.get('.modal-content').should('not.exist');
    });

    it('should revert to original data when cancel is clicked mid-edition', () => {
        // 1. Entramos al detalle
        cy.get('table tbody tr:first-child.clickable').click({ force: true });
        cy.wait('@getPatientDetail');

        // 2. Abrimos el modal
        cy.contains('.details-actions button', 'Editar').click();
        cy.get('.modal-content').should('be.visible');

        // 3. Modificamos un campo
        cy.get('input[formControlName="name"]').clear().type('TEXTO CANCELADO');

        // 4. Cancelamos
        cy.contains('button', 'Cancelar').click();
        cy.get('.modal-content').should('not.exist');

        // 5. Volvemos a abrir y confirmamos que NO tiene "TEXTO CANCELADO"
        cy.contains('.details-actions button', 'Editar').click();
        cy.get('input[formControlName="name"]').should('not.have.value', 'TEXTO CANCELADO');
    });
});
