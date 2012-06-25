Feature: Saving a snippet
  As an efficient developer
  I would like to save a snippet
  So that I can retrieve it later

  Scenario: Successful save
    Given I am on the home page
    When I enter "My Snippet" in the "Snippet title" field
    And I enter "Snippet content" in the "Snippet content" field
    And I click the "Create snippet" button
    Then I should see a message with "Snippet 'My Snippet' saved!"