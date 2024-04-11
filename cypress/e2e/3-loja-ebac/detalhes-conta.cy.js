/// <reference types = "cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('catia.lisboa@teste.com.br', 'teste@123')
    });

    it('Deve completar detalhes da conta com sucesso', ( )=> {
        
    });
});