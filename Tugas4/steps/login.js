import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the login page', () => {
  cy.visit('https://www.saucedemo.com/')
});

When('I enter valid username and password', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
});

When('I enter invalid username and password', () => {
  cy.get('#user-name').type('invalid_user');
  cy.get('#password').type('wrong_password');
});

When('I click the login button', () => {
  cy.get('#login-button').click();
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I should see an error message', () => {
  cy.get('[data-test="error"]').should('be.visible');
});