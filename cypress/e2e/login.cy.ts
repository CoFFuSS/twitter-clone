/// <reference types="Cypress" />
describe('login tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/log-in');
  });
  it('should login user', () => {
    cy.get('[data-cy="identifier"]').type('313131@gmail.com');
    cy.get('[data-cy="password"]').type('313131');
    cy.get('[data-cy="login-button"]').click();
  });
});
