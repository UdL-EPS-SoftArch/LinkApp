Feature: Join Group
  In order to join a group
  As a user
  I want to search a group and join it
  Background:
    Given I'm in the homepage
    And I log in as "default1" with password "password"
    Then The "Register" menu is not present

  Scenario: Join a group
    Given I am in group-list page "1"
    When I click the "Join" button
    Then Join button changes its value to "Joined"
