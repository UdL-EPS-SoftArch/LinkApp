Feature: Create Meet
  In order to use the app
  The user must be able to
  create a meeting
  Background:
    Given I'm in the homepage
    And I log in as "default1" with password "password"

  Scenario: Create new meet
    Given I go to the meet creation page of group 1
    When Fill the meet creation form with
      | FIELD    | VALUE         |
      | name     | User          |
      | username | user          |
      | email    | user@demo.app |
      | password | password      |
    And I click the "Submit" button
    Then It takes me to the meet created page
    And The meet created page information matches
