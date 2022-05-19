Feature: Create Group
  In order to use the app
  The user must be able to
  create a group
  Background:
    Given I'm in the homepage
    And I log in as "demo" with password "password"
    Then The "Register" menu is not present

  Scenario: Create new group
    Given I go to the group creation page
    When Fill the meet creation form with
      | FIELD       | VALUE                |
      | title       | TestingGroup         |
      | description | Cucumber is working? |
      | visibility  | PUBLIC               |
    And I click the "Submit" button
    Then It takes me to the group created page
    And The meet created page information matches
      | FIELD       | VALUE                    |
      | title       | TestingGroup             |
      | description | Cucumber is working?     |
