import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {DataTable} from "@cucumber/cucumber";

Given(/^I go to the group creation page$/, () => {
    cy.visit('http://localhost:4200/groups/create');
  });

  When(/^Fill the group creation form with$/, (table: DataTable) => {
    table.rows().forEach((pair: string[]) =>
      cy.get('#' + pair[0])
        .type(pair[1])
        .blur()
    );
    cy.get('label').contains('PUBLIC').click();
  });

  Then(/^It takes me to the group created page$/, () => {
    assert(
      cy.url()
        .should('include', 'groups/')
    );
  });

  Then(/^The group created page information matches$/, (table: DataTable) => {
    table.rows().forEach(
      (pair: string[]) =>
        cy.get('#' + pair[0] + '-group')
          .invoke('text')
          .should('contains', pair[1])
    );
  });
