describe('Pagination Edge Cases (Mocked)', () => {

    const generateMockPatients = (count: number) => {
        return Array.from({ length: count }, (_, i) => ({
            id: `723e4567-e89b-12d3-a456-${i.toString().padStart(12, '0')}`,
            name: `Nombre${i}`,
            lastName: `Apellido${i}`,
            dni: `111111${i.toString().padStart(2, '0')}`,
            phone: `600${i.toString().padStart(6, '0')}`,
            email: `test${i}@mock.com`,
            birthDate: '1990-01-01',
            allergies: '',
            createdAt: new Date().toISOString(),
            records: 0,
            notes: 0,
            activeDiagnoses: 0,
            completedDiagnoses: 0
        }));
    };

    beforeEach(() => {
        // Generamos 11 pacientes. Con pageSize=10 en frontend, habrá 2 páginas.
        const initialPatients = generateMockPatients(11);

        cy.intercept('GET', '**/api/patients*', {
            statusCode: 200,
            body: initialPatients
        }).as('getPatients');

        // Interceptar el borrado del paciente nº 11 (id: 723e4567-e89b-12d3-a456-000000000010)
        cy.intercept('DELETE', '**/api/patients/723e4567-e89b-12d3-a456-000000000010', {
            statusCode: 204
        }).as('deletePatient');

        cy.visit('/patients');
        cy.wait('@getPatients');
    });

    it('should reload or redirect gracefully when deleting the last item on a page', () => {
        // 1. Ir a la página 2 (buscar el botón de paginación que diga "Siguiente" o "2")
        cy.contains('button', 'Siguiente').click();

        // Debería verse un indicativo de página 2
        cy.get('.page-info').should('contain', '2 de 2');

        // 2. Comprobar que solo hay 1 fila
        cy.get('table tbody tr').should('have.length', 1);

        // 3. Modificamos el mock del GET para que ahora devuelva 10 (simulando que se borró)
        cy.intercept('GET', '**/api/patients*', {
            statusCode: 200,
            body: generateMockPatients(10)
        }).as('getPatientsAfterDelete');

        // 4. Ir a los detalles del paciente de la row clickeable
        // Preparar el mock del detalle primero
        const initialPatients = generateMockPatients(11);
        cy.intercept('GET', `**/api/patients/723e4567-e89b-12d3-a456-000000000010`, {
            statusCode: 200,
            body: initialPatients[10]
        }).as('getPatientDetail10');
        // Prevenir errores 404 de UI si carga tabs
        cy.intercept('GET', '**/api/patients/723e4567-e89b-12d3-a456-000000000010/medical-records', { body: [] });
        cy.intercept('GET', '**/api/patients/723e4567-e89b-12d3-a456-000000000010/previous-records', { body: [] });
        cy.intercept('GET', '**/api/patients/723e4567-e89b-12d3-a456-000000000010/notes', { body: [] });

        cy.get('table tbody tr:first-child.clickable').click({ force: true });
        cy.wait('@getPatientDetail10');

        // 5. Pulsar Eliminar
        cy.contains('.details-actions button', 'Eliminar').click();

        // Automáticamente (o con confirmación), se borra. window:confirm se autoacepta en Cypress default
        cy.on('window:confirm', () => true);

        cy.wait('@deletePatient');
        cy.wait('@getPatientsAfterDelete');

        // Aquí comprobamos que:
        // 1. Nos ha devuelto a la lista y recarga la paginación y ahora estamos en la Página 1
        // 2. Que el total de páginas mostrado en UI es 1
        cy.get('.page-info').should('contain', '1 de 1');

        // Y debemos ver 10 elementos renderizados en la primera página
        cy.get('table tbody tr').should('have.length', 10);
    });
});
