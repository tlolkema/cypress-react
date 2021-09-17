describe('E2E Tests', () => {
    it('Should display the page', () => {
        cy.intercept('GET', '**/name').as('getName')
        cy.visit('http://localhost:3000/')
        cy.wait('@getName')
        cy.contains('Cypress')
    })

    it('Should show an error message if GET /name fails', () => {
        cy.intercept('GET', '**/name', {
            statusCode: 500,
            body: []
        }).as('getName')
        cy.visit('http://localhost:3000/')
        cy.wait('@getName')
        cy.contains('GET /name failed')
    })

    it('Should display a different welcome text if name is admin', () => {
        cy.intercept('GET', '**/name', {
            statusCode: 200,
            body: { 'name': 'admin' }
        }).as('getName')
        cy.visit('http://localhost:3000/')
        cy.wait('@getName')
        cy.contains('Welcome, admin')
    })

    it('Should show an error message if GET /frameworks fails', () => {
        cy.intercept('GET', '**/frameworks', {
            statusCode: 500,
            body: []
        }).as('getFrameworks')
        cy.visit('http://localhost:3000/')
        cy.wait('@getFrameworks')
        cy.contains('GET /frameworks failed')
    })

    it('Should show an both errors message if GET /frameworks and GET /name fails', () => {
        cy.intercept('GET', '**/frameworks', {
            statusCode: 500,
            body: []
        }).as('getFrameworks')
        cy.intercept('GET', '**/name', {
            statusCode: 500,
            body: []
        }).as('getName')

        cy.visit('http://localhost:3000/')
        cy.wait(['@getFrameworks', '@getName'])
        cy.contains('GET /frameworks failed')
        cy.contains('GET /name failed')
    })

    it('Should display the page mobile', () => {
        cy.viewport('iphone-6')
        cy.intercept('GET', '**/name').as('getName')
        cy.visit('http://localhost:3000/')
        cy.wait('@getName')
        cy.contains('Cypress')
    })
})
