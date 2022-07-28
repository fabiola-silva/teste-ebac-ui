/// <reference types= "cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEnderecos = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFasturamento('Noah', 'Vasconcelos', 'TecInfo', 'Australia', 'Adelaide', '5555', 'Melbourme', 'Queensland', '658799988', '11985782145', 'tecinfo@teste.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFasturamento(
            dadosEnderecos[0].nome,
            dadosEnderecos[0].sobrenome,
            dadosEnderecos[0].empresa,
            dadosEnderecos[0].pais,
            dadosEnderecos[0].endereco,
            dadosEnderecos[0].numero,
            dadosEnderecos[0].cidade,
            dadosEnderecos[0].estado,
            dadosEnderecos[0].cep,
            dadosEnderecos[0].telefone,
            dadosEnderecos[0].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
    });
});