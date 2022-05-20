Feature: Create Message
  In order to use the app
  As user
  I want to create a Message

  Background:
    Given I'm in the homepage
    And I log in as "default1" with password "password"
    And The "Register" menu is not present
    And I go to the meet creation page of group 1
    When Fill the meet creation form with
      | FIELD    | VALUE                   |
      | title    | TitleMeet               |
      | description | Lorem Ipsum here     |
      | location    | Lleida               |
      | initialMeetDate | 2023-01-01T12:00 |
      | finalMeetDate   | 2023-01-02T12:00 |
    And I click the "Submit" button
    Then It takes me to the meet created page

  Scenario: I create a message
    Given I'm logged in as user "default1"
    And I'm in the meet 9
    And I click the "Chat" button
    When I fill the form with
      | FIELD    | VALUE         |
      | fill   | Mensaje 1     |
    And I click the "Submit" button
    Then It takes me to the meet 9 chat page
