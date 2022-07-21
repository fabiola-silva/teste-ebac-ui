/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Arcadio Gym Short')
        .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]')
             .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items')

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “Arcadio Gym Short” foram adicionados no seu carrinho.`)
    
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProduto('Ariel Roll Sleeve Sweatshirt', 'M', 'Red', 2)
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProduto('Aether Gym Pant', '32', 'Brown', 2)
    });

});