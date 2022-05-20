Feature: See Group Details
  In order to use the app
  Any user must be able to
  see the details of a group
  Background:
    Given I'm in the homepage

  Scenario: See group details
    When I click the "Title group1" button
    Then I'm in the details page of the group with id "1"

