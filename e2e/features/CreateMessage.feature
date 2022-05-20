Feature: Create Message
  In order to use the app
  As user
  I want to create a Message

  Scenario: I create a message
    Given I'm logged in as user "demo"
    And I'm in the meet 1
    And I click the "Chat" button
    When I fill the form with
      | FIELD    | VALUE         |
      | submit   | Mensaje 1     |
    And I click the "Submit" button
