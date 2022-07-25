/// <reference types= "cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFasturamento('Noah', 'Vasconcelos', 'TecInfo', 'Australia', 'Adelaide', '5555', 'Melbourme', 'Queensland', '658799988', '11985782145', 'tecinfo@teste.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
    });
});