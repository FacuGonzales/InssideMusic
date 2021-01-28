/// <reference types="cypress" />

context('LoginPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('Debo poder ingresar mis datos en el formulario y loguearme', () => {
        cy.wait(2500);
        cy.get('#inputUser').type('test')
        cy.wait(2000);
        cy.get('#inputPassword').type('1234')
        cy.wait(2000);
        cy.get('#buttonLogin').click();
        cy.wait(2000);
    })
    
})