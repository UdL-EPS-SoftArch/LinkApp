Feature: Create post
  In order to use the app
  As user
  I want to create a Post

  Scenario: I log in
    Given I'm in the log-in page
    And I'm not logged in
    When I fill the form with
      | FIELD    | VALUE         |
      | username | demo          |
      | password | password      |
    And I click the "Submit" button
    Then I'm logged in as user "demo"


