export class AddProducts {
    btn_add_to_cart = '#add-to-cart-sauce-labs-backpack'
    btn_cart = '#shopping_cart_container > a'

    clickAddToCart(){
        cy.get(this.btn_add_to_cart).click({multiple:true})
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    assertAddToCart(){
        cy.contains('Remove')
        .should('contain','Remove')
        .should('be.visible')
    }
}
