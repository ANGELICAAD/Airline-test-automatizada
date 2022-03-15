/// <reference types="Cypress" />
 
it('buscar lista de vuelos', () => {
    cy.visit('http://localhost:4200');
    cy.get('#departureFlight').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-floating > .form-select').select('Cartagena');
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-floating > .form-select').select('Bogota');
    cy.wait(2000);
    cy.get('#btnPassengers').click();
    cy.get('#numAdult').type('1');
    cy.wait(2000);
    cy.get('#numChild').type('0');
    cy.wait(2000);
    cy.get('#numInfant').type('0');
    cy.wait(2000);
    cy.get('.modal-footer > .btn-success').click();
    cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').click();
    cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').type('2021-11-21');
    cy.wait(2000);
    cy.get('#btnSearch').click();
});