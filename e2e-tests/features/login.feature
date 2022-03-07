Feature: Login

    Scenario: 1. Login With Wrong Username & Password (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "cobanugi"
        And I type password "cobanugi"
        And I click sign in button
        Then I see popup warning error for wrong username & password

    Scenario: 2. Login With Null Username & Valid Password (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type password "nugi"
        And I click sign in button
        Then I got text error message "Required" under username field

    Scenario: 3. Login With Valid Username & Null Password (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "nugi"
        And I click sign in button
        Then I got text error message "Required" under password field

    Scenario: 4. Login With Valid Username & password does not meet the requirements (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "nugi"
        And I type password "n"
        And I click sign in button
        Then I got text error message "password must be at least 2 characters" under password field

    Scenario: 5. Login With Null Username & Null Password (Negative Case)
        Given I visit GSI Medical Lab web app
        When I click sign in button
        Then I got text error message "Required" under username field
        And I got text error message "Required" under password field

    Scenario: 6. Login With Valid Username & Password use CAPITAL Character (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "nugi"
        And I type password "NUGI"
        And I click sign in button
        Then I got popup warning error because use capital characters in password field

    Scenario: 7. Login With Username use CAPITAL Charachter & Valid Password (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "NUGI"
        And I type password "nugi"
        And I click sign in button
        Then I got popup warning error because use capital characters in username field

    Scenario: 8. Login With Username & Password use CAPITAL Charachter (Negative Case)
        Given I visit GSI Medical Lab web app
        When I type username "NUGI"
        And I type password "NUGI"
        And I click sign in button
        Then I got popup warning error because use Capital characters in username and password column

    Scenario: 9. Login without checklist the "Keep me signed in" (Positive Case)
        Given I visit GSI Medical Lab web app
        When I type username "nugi"
        And I type password "nugi"
        And I click sign in button
        Then I should see to home page 'Hello, NUGI!', 'Home', 'Lab Request List', 'Booking List', 'Report', 'Logs', 'Result', 'Appointment', 'Configuration', 'Create Lab Request'
        Then I logout from GSI Medical Lab web app

    Scenario: 10. Login with checklist the "Keep me signed in" (Positive Case)
        Given I visit GSI Medical Lab web app
        When I type username "nugi"
        And  I type password "nugi"
        And I checklist the keep me signed in
        And I click sign in button
        Then I should see to home page 'Hello, NUGI!', 'Home', 'Lab Request List', 'Booking List', 'Report', 'Logs', 'Result', 'Appointment', 'Configuration', 'Create Lab Request'
        Then I logout from GSI Medical Lab web app