export class RemoveProduct {
    btn_remove_from_cart = '#remove-sauce-labs-backpack';

    clickRemoveFromCart(){
        cy.get(this.btn_remove_from_cart).click();
    }

    // assertRemoveFromCart(){
    //     cy.contains('Your cart')
    //         .should('contain', 'Your cart')
    //         .should('be.visible');
    // }
}
