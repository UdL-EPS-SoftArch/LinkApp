import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from '@cucumber/cucumber';

Given('I\'m in the log-in page', () => {
  cy.visit('http://localhost:4200/login');
});

Given('I\'m not logged in', () => {
  cy.get('.nav-link').contains('Login');
});

When('I fill the form with', (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0]).type(pair[1]).blur() );
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
});

Then('I\'m logged in as user {string}', (username) => {
  cy.get('#currentUser')
    .invoke('text')
    .should('contains', username);
});
