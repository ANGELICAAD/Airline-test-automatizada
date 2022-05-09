/// <reference types="Cypress" />
 
it('test completo con pasajero regsitrado', () => {
    // cy.visit('http://localhost:4200');
    cy.visit('https://angular-airline.herokuapp.com/');
    cy.get('#departureFlight').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-floating > .form-select').select('Bogota');
    cy.wait(2000);
    cy.get(':nth-child(2) > .form-floating > .form-select').select('Cancun');
    cy.wait(2000);
    cy.get('#btnPassengers').click();
    // cy.get('#numAdult').type('1');
    cy.get('.modal-body > .container > form.ng-untouched > :nth-child(1) > .form-control').type('1');
    cy.wait(2000);
    // cy.get('#numChild').type('0');
    cy.get('form.ng-untouched > :nth-child(2) > .form-control').type('0');
    cy.wait(2000);
    // cy.get('#numInfant').type('0');
    cy.get('.ng-invalid.ng-dirty > :nth-child(3) > .form-control').type('0');
    cy.wait(2000);
    cy.get('.modal-footer > .btn-success').click();
    cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').click();
    cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').type('2022-11-01');
    cy.wait(2000);
    cy.get('#btnSearch').click();
    cy.get('#selectFlight').click();
    cy.get('#document').type('1095251264');
    cy.wait(2000);
    cy.get('.docPassenger > .btn').click();
    cy.wait(1000);
    cy.get('.modal-footer > .btn').click();
    cy.wait(1000);
    cy.get('#btnConfirm').click();
});