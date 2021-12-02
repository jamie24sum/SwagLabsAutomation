import {SwagLabUsers} from "../fixtures/testusers";

export class LoginPage {
    loginUsernamePassword(SwagLabUsers) {
        cy.get('[data-test=username]').type(SwagLabUsers.username)
        cy.get('[data-test=password]').type(SwagLabUsers.password)
        cy.get('[data-test=login-button]').click()
    }
}