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
      | name     | User          |
      | username | user2          |
      | email    | user@demo.app |
      | password | password      |
    Then I click the "Submit" button
    And I log in as "user2" with password "password"


  Scenario: Join a group
    Given I am in group-list page "1"
    When I click the "Join" button
    Then Join button changes its value to "Joined"
