/// <reference types="Cypress" />
import { setTheme } from "../../src/store/slices/themeSlice"

describe("theme tests", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/log-in');
  });
  it('should change theme', () => {
    cy.get('[data-cy="identifier"]').type('313131@gmail.com');
    cy.get('[data-cy="password"]').type('313131');
    cy.get('[data-cy="login-button"]').click();
    cy.wait(3000);
    cy.get('[data-cy="theme-switch-input"]').click();
    cy.get('[data-cy="theme-switch-input"]').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  });
})
