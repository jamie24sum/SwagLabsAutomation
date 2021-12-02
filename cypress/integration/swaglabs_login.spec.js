import { LoginPage } from "../page-objects/login-page";
import {SwagPage} from "../page-objects/swag-page";
import {standardUser} from "../fixtures/testusers";



it('Login users success', () => {
    const{baseUrl}= Cypress.config();
    const loginPage = new LoginPage();
    cy.visit(`${baseUrl}`)
    loginPage.loginUsernamePassword(standardUser)
})


it('Sort price low to high', () => {
    const{baseUrl}= Cypress.config();
    const loginPage = new LoginPage();
    const swagPage = new SwagPage();
    cy.visit(`${baseUrl}`)
    loginPage.loginUsernamePassword("standard_user")
    swagPage.sortSwagNameAtoZ();
    
})

it('Add item to cart', () => {
    const{baseUrl}= Cypress.config();
    const loginPage = new LoginPage();
    const swagPage = new SwagPage();
    cy.visit(`${baseUrl}`)
    loginPage.loginUsernamePassword("standard_user")
    swagPage.sortSwagNameAtoZ();
    swagPage.addItemToCart();
})
