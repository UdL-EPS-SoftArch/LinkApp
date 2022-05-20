Feature: Join Group
  In order to join a group
  As a user
  I want to search a group and join it
  Background:
    Given I'm in the homepage
    And I'm not logged in
    When I click the "Register" menu
    And I fill the form with
      | FIELD    | VALUE         |
      | name     | Test          |
      | username | test          |
      | email    | test@demo.app |
      | password | password      |
    Then I click the "Submit" button
    And I go to the homepage
    And I log in as "test" with password "password"


  Scenario: Join a group
    Given I am in group-list page "1"
    When I click the "Join" button
    Then Join button changes its value to "Joined"
