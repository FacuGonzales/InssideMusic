/// <reference types="cypress" />

context('LoginPage', () => {
    beforeEach(() => {
        cy.token()
        cy.wait(2000);
        cy.visit('http://localhost:4200/favorites');
    })

    it('Debo poder ingresar a su pantalla e ir a cargar un favorito', () => {
        cy.wait(3000);
        cy.get(':nth-child(3) > span').click();
    })

})