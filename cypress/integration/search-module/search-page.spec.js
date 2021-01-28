/// <reference types="cypress" />

context('LoginPage', () => {
    beforeEach(() => {
        cy.token()
        cy.wait(2000);
        cy.visit('http://localhost:4200/search');
    })

    it('Debo poder buscar un artista y marcarlo como favorito', () => {
        cy.wait(6000);
        cy.get('.input-group > .form-control').type('reik')
        cy.wait(5000);
        cy.get(':nth-child(5) > .bi').click();
    })

    it('Debo poder buscar un album y marcarlo como favorito', () => {
        cy.wait(5000);
        cy.get('#inputState').select('album')
        cy.wait(5000);
        cy.get('.input-group > .form-control').type('recovery');
        cy.wait(5000);
        cy.get(':nth-child(7) > .bi').click();
    })

    it('Debo poder buscar una cancion y marcarla como favorito', () => {
        cy.wait(5000);
        cy.get('#inputState').select('track')
        cy.wait(5000);
        cy.get('.input-group > .form-control').type('noviembre sin ti');
        cy.wait(5000);
        cy.get(':nth-child(7) > .bi').click();
        cy.wait(2000);
        cy.scrollTo('top') 
    })
})