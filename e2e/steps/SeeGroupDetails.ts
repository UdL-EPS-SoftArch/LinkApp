import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('I\'m in the homepage', () => {
    cy.visit('http://localhost:4200');
});


When('I click the {string} button', (label) => {
    cy.get('button').contains(label).click();
});


Then('I\'m in the details page of the group with id {string}', (group) => {
    assert(
        cy.url()
          .should('include', '/groups/' + group)
      );
});