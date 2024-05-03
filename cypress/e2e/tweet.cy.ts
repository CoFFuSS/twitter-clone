/// <reference types="Cypress" />
describe('profile tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/log-in');
  });
  it('should render profile of user', () => {
    const email = '313131@gmail.com';
    cy.get('[data-cy="identifier"]').type(email);
    cy.get('[data-cy="password"]').type('313131');
    cy.get('[data-cy="login-button"]').click();
    cy.wait(3000);
    cy.visit('http://localhost:5173/profile');
    cy.get('[data-cy="tweet-input"]').type('Tweet writed by cypress');
    cy.get('[data-cy="send-tweet-button"]').click();
  });
});
