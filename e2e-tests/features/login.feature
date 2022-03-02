Feature: Example

    Scenario: Scenario 1: Invalid Login 1 (Wrong Username & Password)
        Given I visit GSI Medical Lab web app
        When I type username "nugi1234"
        And I type password "nugi1234"
        And I click sign in button
        Then I see popup warning error for wrong username & password
