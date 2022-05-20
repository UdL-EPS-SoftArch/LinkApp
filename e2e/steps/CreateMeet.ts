import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from '@cucumber/cucumber';

Given(/^I go to the meet creation page of group (\d+)$/, (group:String) => {
  cy.visit('http://localhost:4200/groups/' + group + '/createMeet');
});

When(/^Fill the meet creation form with$/, (table: DataTable) => {
  table.rows().forEach((pair: string[]) =>
    cy.get('#' + pair[0])
      .type(pair[1])
      .blur()
  );
});

Then(/^It takes me to the meet created page$/, () => {
  assert(
    cy.url()
      .should('include', 'meets/')
  );
});

Then(/^The meet created page information matches$/, (table: DataTable) => {
  table.rows().forEach(
    (pair: string[]) =>
      cy.get('#' + pair[0] + '-repr')
        .invoke('text')
        .should('contains', pair[1])
  );
});
