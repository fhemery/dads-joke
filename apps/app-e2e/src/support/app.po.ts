export const getGreeting = () => cy.get('h1');

export class HomePo {
  goTo() {
    cy.visit('/');
  }

  setApiToReturnNoJokes() {
    cy.intercept('https://icanhazdadjoke.com/search', {
      fixture: 'no-joke.json',
    });
  }

  shouldHaveJokeHeader() {
    cy.get('h2').contains('Random Jokes').should('exist');
  }

  shouldDisplayNoJokeCard() {
    cy.get('.no-joke').should('exist');
  }

  clickLoginButton() {
    cy.get('button').contains('Login').click();
  }

  shouldNotHaveLoginButton() {
    cy.get('button').contains('Login').should('not.exist');
  }

  logoutIfNeeded() {
    this.goTo();
    if (Cypress.$('#logout-btn').length) {
      cy.get('#logout-btn').click();
      cy.log('Logged out');
    } else {
      cy.log('No need to log out');
    }
  }
}
