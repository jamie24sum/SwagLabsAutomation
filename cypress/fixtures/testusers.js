export class SwagLabUsers {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

export var standardUser = new SwagLabUsers("standard_user", "secret_sauce")
export var lockedOutUser = new SwagLabUsers("locked_out_user", "secret_sauce")
export var problemUser = new SwagLabUsers("problem_user", "secret_sauce")
export var performanceGlitchUser = new SwagLabUsers("performance_glitch_user", "secret_sauce")
export var invalidUsername = new SwagLabUsers("invalid_username", "secret_sauce")
export var invalidPassword = new SwagLabUsers("standard_user", "Jamie1234")
