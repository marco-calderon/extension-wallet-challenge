/// <reference types="cypress" />
// go-details.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Experiences', () => {
  it('Show experiences details button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="experiences-container"]').find('[data-cy="experience"] [data-cy="experience__details__button"]').should('be.visible')
  });

  it('Move to details page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="experiences-container"]:first').find('[data-cy="experience"]:first [data-cy="experience__details__button"]');
    cy.get('[data-cy="experiences-container"]:first').find('[data-cy="experience"]:first [data-cy="experience__details__button"]').click();
    cy.get('[data-cy="experience__page"').should('be.visible');
  })
})