export class SwagPage{
    sortSwagNameAtoZ(){
        cy.get('[data-test=product_sort_container]').select("Price (low to high)")
    }

    addItemToCart(){
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=continue-shopping]').click()
    }
}
