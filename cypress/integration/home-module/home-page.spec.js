/// <reference types="cypress" />

context('LoginPage', () => {
    beforeEach(() => {
        cy.token()
        cy.wait(2000);
        cy.visit('http://localhost:4200/home');
    })

    it('Debo poder ingresar al home y visualizar los ultimos lanzamientos y top 50', () => {
        cy.wait(6000);
        cy.scrollTo(0, 1200) 
    })

    it('Debo poder filtrar el top', () => {
        cy.wait(2500);
        cy.get(':nth-child(1) > #inputState').select('10')
        cy.wait(2000);
        cy.scrollTo('top') 
    })

    it('Debo poder tocar la barra de navegacion', () => {
        cy.wait(2500);
        cy.get('.navbar-toggler-icon').click()
        cy.scrollTo('top') 
        cy.wait(2000);
    })
})