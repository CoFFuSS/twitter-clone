/// <reference types="Cypress" />
describe("signUp tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/sign-in")
  })
  it("should register user", () => {
    cy.get('[data-cy="email"]').type("666666@gmail.com")
    cy.get('[data-cy="password"]').type("666666")
    cy.get('[data-cy="phone"]').type("+375666666666")
    cy.get('[data-cy="name"]').type("abobus")
    cy.get('[data-cy="month"]').select('May')
    cy.get('[data-cy="day"]').select('1')
    cy.get('[data-cy="year"]').select('2000')
    cy.get('[data-cy="signup-button"]').click()
  })
})
