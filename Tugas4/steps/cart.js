import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in', () => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

When('I add an item to the cart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Then('the cart badge should show 1', () => {
  cy.get('.shopping_cart_badge').should('have.text', '1');
});