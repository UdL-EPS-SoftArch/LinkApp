import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from "@cucumber/cucumber";

Given(/^I'm in the meet (\d+)$/, (meet:String) => {
  cy.visit('http://localhost:4200/meets/' + meet);
});

Then(/^It takes me to the meet (\d+) chat page$/, (meet:String) => {
  assert(
    cy.url()
      .should('include', 'meets/' + meet + '/message-list/')
  );
});
