const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I visit web$/, () => {
    return client
        .url('https://opensource-demo.orangehrmlive.com/')
        .maximizeWindow()
        .pause(1000)
});

When(/^I type username "(.*?)"$/, (username) => {
    return client
        .useXpath()
        .waitForElementPresent('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[2]/input')
        .setValue('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[2]/input', username)
});

When(/^I type password "(.*?)"$/, (password) => {
    return client
        .useXpath()
        .waitForElementPresent('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[3]/input')
        .setValue('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[3]/input', password)
        .pause(500)
});

When(/^I click login button$/, () => {
    return client
        .useXpath()
        .click('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/input')
        .pause(500)
});

'Scenario 1'
Then(/^I got text error message "Invalid credentials"$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span')
        .assert.containsText('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span', 'Invalid credentials')
});

'Scenario 2'
Then(/^I got text error message "Username cannot be empty"$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span')
        .assert.containsText('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span', 'Username cannot be empty')
});

'Scenario 3'
Then(/^I got text error message "Password cannot be empty"$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span')
        .assert.containsText('/html/body/div[1]/div/div[3]/div[2]/div[2]/form/div[5]/span', 'Password cannot be empty')
});

Then(/^I should see tab '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)'$/, (Admin, PIM, Leave, Time, Recruitment, Performance, Dashboard, Directory, Maintenance, Buzz) => {
    return client
        .useXpath()
        .assert.urlEquals('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[1]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[1]/a/b', Admin)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[2]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[2]/a/b', PIM)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[3]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[3]/a/b', Leave)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[4]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[4]/a/b', Time)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[5]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[5]/a/b', Recruitment)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[7]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[7]/a/b', Performance)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[8]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[8]/a/b', Dashboard)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[9]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[9]/a/b', Directory)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[10]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[10]/a/b', Maintenance)
        .waitForElementPresent('/html/body/div[1]/div[2]/ul/li[11]/a/b')
        .assert.containsText('/html/body/div[1]/div[2]/ul/li[11]/a/b', Buzz)
        .pause(500)
});

Then(/^I click button menu profile$/, () => {
    return client
        .useXpath()
        .click('/html/body/div[1]/div[1]/a[2]')
        .pause(500)
});

Then(/^I click logout$/, () => {
    return client
        .useXpath()
        .click('/html/body/div[1]/div[1]/div[9]/ul/li[3]/a')
        .pause(500)
});

Then(/^I click MyInfo Menu$/, () => {
    return client
        .useXpath()
        .click('/html/body/div[1]/div[2]/ul/li[6]/a/b')
        .pause(500)
});

Then(/^I should see 'Personal Details'$/, () => {
    return client
        .useXpath()
        .waitForElementPresent('/html/body/div[1]/div[3]/div/div[2]/div[1]/h1')
        .assert.containsText('/html/body/div[1]/div[3]/div/div[2]/div[1]/h1', 'Personal Details')
});