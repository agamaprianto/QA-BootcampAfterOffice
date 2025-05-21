import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I have an item in the cart', () => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('I remove the item', () => {
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
});

Then('the cart badge should not exist', () => {
  cy.get('.shopping_cart_badge').should('not.exist');
});

When('I proceed to checkout and fill valid info', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type('John');
  cy.get('[data-test="lastName"]').type('Doe');
  cy.get('[data-test="postalCode"]').type('12345');
  cy.get('[data-test="continue"]').click();
});

Then('I should see the Checkout: Overview page', () => {
  cy.url().should('include', 'checkout-step-two.html');
});

Then('I complete the order', () => {
  cy.get('[data-test="finish"]').click();
});

Then('I should see the order confirmation', () => {
  cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
});