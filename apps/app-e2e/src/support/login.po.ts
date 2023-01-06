export class LoginPo {
  shouldBeDisplayed() {
    cy.get('h2').contains('Login').should('exist');
  }

  authenticate(login: string, password: string) {
    cy.get('input[name=login]').type(login);
    cy.get('input[name=password]').type(password);
    cy.get('#login-btn').click();
  }
}
