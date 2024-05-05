/// <reference types="Cypress" />
describe('logout tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/log-in');
  });
  it('should logout user', () => {
    cy.get('[data-cy="identifier"]').type('313131@gmail.com');
    cy.get('[data-cy="password"]').type('313131');
    cy.get('[data-cy="login-button"]').click();
    cy.wait(5000);
    cy.get('[data-cy="logout-button"]').click();
  });
});
