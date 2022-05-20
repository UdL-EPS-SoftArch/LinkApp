import {Given, Then, When, And} from 'cypress-cucumber-preprocessor/steps';

Given('I am in group-list page {string}', (id) => {
  cy.visit('http://localhost:4200/groups/'.concat(id));
});

When('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
});

Then('Join button changes its value to {string}', (label) => {
  cy.get('button').contains(label);
});

And ('I go to the homepage', () => {
  cy.visit('http://localhost:4200');
});
