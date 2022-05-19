import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

Given('I am in group-list page {string}', (id) => {
  cy.visit('http://localhost:4200/groups/'.concat(id));
});

Then('I click the {string} button', (label) => {
  cy.get('button').contains(label).click();
});
