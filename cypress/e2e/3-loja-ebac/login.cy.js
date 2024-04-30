/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {
    const perfil = require('../../fixtures/perfil.json')

    

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('catia.lisboa@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, catia.lisboa')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('catialisboa@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Deve exibir menagem de erro com senha inválida', () => {
        cy.get('#username').type('catia.lisboa@teste.com.br')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail catia.lisboa@teste.com.br está incorreta.')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, catia.lisboa')

    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        });
    });
    it('Deve fazer login com sucesso - usando comandos customizados', () => {
            cy.login('catia.lisboa@teste.com.br', 'teste@123')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, catia.lisboa')
    });
        
});