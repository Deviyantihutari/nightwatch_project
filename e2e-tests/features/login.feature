Feature: Login

    Scenario: 1. Login With Wrong Username & Password (Negative Case)
        Given I visit web
        When I type username "cobalogin"
        And I type password "cobalogin"
        And I click login button
        Then I got text error message "Invalid credentials"

    Scenario: 2. Login With Null Username & Valid Password (Negative Case)
        Given I visit web
        When I type password "admin123"
        And I click login button
        Then I got text error message "Username cannot be empty"

    Scenario: 3. Login With Valid Username & Null Password (Negative Case)
        Given I visit web
        When I type username "Admin"
        And I click login button
        Then I got text error message "Password cannot be empty"

    Scenario: 4. Login With Valid Username & Password (Positive Case)
        Given I visit web
        When I type username "Admin"
        And I type password "admin123"
        And I click login button
        Then I should see tab 'Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Buzz'
        Then I click button menu profile
        Then I click logout

    Scenario: 5. Login With Valid Username & Password (Positive Case) and Logout
        Given I visit web
        When I type username "Admin"
        And I type password "admin123"
        And I click login button
        Then I click MyInfo Menu
        Then I should see 'Personal Details'