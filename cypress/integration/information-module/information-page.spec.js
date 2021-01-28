/// <reference types="cypress" />

context('LoginPage', () => {
    beforeEach(() => {
        cy.token()
        cy.wait(2000);
        cy.visit('http://localhost:4200/search');
    })

    it('Debo poder buscar un artista/album/cancion e ir a ver su informacion, marcarlo como fav, y reproducir un tema', () => {
        cy.wait(5000);
        cy.get('#inputState').select('album')
        cy.wait(5000);
        cy.get('.input-group > .form-control').type('hasta ahora');
        cy.wait(5000);
        cy.get(':nth-child(5) > .bi').click();
        cy.wait(6000);
        cy.get('.info-principal > span > .bi').click();
        cy.wait(6000);
        cy.get(':nth-child(1) > :nth-child(3) > a > .bi').click();
        cy.wait(2000);
        cy.scrollTo('top') 
    })

})