const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I visit GSI Medical Lab web app$/, () => {
    return client
        .url('https://agsidev.gsilab.id/')
        .maximizeWindow()
        .pause(500)
});

When(/^I type username "(.*?)"$/, (username) => {
    return client
        .useXpath()
        .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input')
        .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input', username)
});

When(/^I type password "(.*?)"$/, (password) => {
    return client
        .useXpath()
        .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input')
        .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input', password)
        .pause(500)
});

When(/^I click sign in button$/, () => {
    return client
        .useXpath()
        .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/button')
        .pause(500)
});

Then(/^I see popup warning error for wrong username & password$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[3]/div')
        .assert.containsText('/html/body/div[3]/div/div[3]', 'Invalid username and(or) password')
});

Then(/^I got text error message "Required" under username field$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[1]')
        .assert.containsText('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[1]', 'Required')
});

Then(/^I got text error message "Required" under password field$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[2]')
        .assert.containsText('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[2]', 'Required')
});

Then(/^I got text error message "password must be at least 2 characters" under password field$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[2]')
        .assert.containsText('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/p[2]', 'password must be at least 2 characters')
});

Then(/^I got popup warning error because use capital characters in password field$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[3]/div')
        .assert.containsText('/html/body/div[3]/div/div[3]', 'Invalid username and(or) password')
});

Then(/^I got popup warning error because use capital characters in username field$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[3]/div')
        .assert.containsText('/html/body/div[3]/div/div[3]', 'Invalid username and(or) password')
});

Then(/^I got popup warning error because use Capital characters in username and password column$/, () => {
    return client
        .useXpath()
        .pause(500)
        .waitForElementPresent('/html/body/div[3]/div')
        .assert.containsText('/html/body/div[3]/div/div[3]', 'Invalid username and(or) password')
});

Then(/^I should see to home page '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)', '(.*?)'$/, (greeting, home, lab_request_list, booking_list, report, logs, result, appointment, configuration, create_lab_request) => {
    return client
        .useXpath()
        .assert.urlEquals('https://agsidev.gsilab.id/home')
        .waitForElementPresent('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]')
        .assert.containsText('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]', greeting)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[1]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[1]', home)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[2]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[2]', lab_request_list)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[3]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[3]', booking_list)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[4]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[4]', report)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[5]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[5]', logs)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[6]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[6]', result)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[7]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[7]', appointment)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[8]')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/nav/ul/li[8]', configuration)
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/button/p')
        .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/button/p', create_lab_request)
        .pause(500)
});

When(/^I checklist the keep me signed in$/, () => {
    return client
        .useXpath()
        .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/label/span[1]/span[1]/input')
        .pause(500)
});

Then(/^I logout from GSI Medical Lab web app$/, () => {
    return client
        .url('https://agsidev.gsilab.id/home')
        .useXpath()
        .pause(500)
        //Click rounded account button
        .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/span')
        .click('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/span')
        .pause(500)
        //Click logout button
        .waitForElementPresent('/html/body/div[3]/div[3]/ul/li')
        .click('/html/body/div[3]/div[3]/ul/li')
        .pause(500)
});

// Given(/^I on GSI login page$/, () => {
//     return client
//     .pause(5000)
//     .assert.urlEquals('https://agsidev.gsilab.id/')
// });

// When(/^I type username '(.*?)'$/, (username) => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input')
//     .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input', username)
//     .pause(500)
// });
//     var fs = require('fs')
//     var userId = fs.readFileSync('./e2e-tests/validate-value/userId_config.json','utf8')
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input')
//     .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[1]/div/input', userId)
//     .pause(500)
// });
// When(/^I type password '(.*?)'$/, (pass) => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input')
//     .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input', pass)
//     .pause(500)
// });
// When(/^I type created password$/, () => {
//     var fs = require('fs')
//     var pass = fs.readFileSync('./e2e-tests/validate-value/password_config.json','utf8')
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input')
//     .setValue('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/div[2]/input', pass)
//     .pause(500)
// });
// When(/^I click Login$/, () => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/button/span[1]')
//     .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/form/button/span[1]')
//     .pause(5000)
// });

// Then(/^I on GSI homepage$/, () => {
//     return client
//     .useXpath()
//     .pause(5000)
//     .assert.urlEquals('https://agsidev.gsilab.id/home')
// });
// Then(/^I see GSI homepage header$/, () => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/p')
//     .assert.containsText('//*[@id="__next"]/div/div/div[1]/header/div/div[2]/p','GSI Platform')
// });
// Then(/^I see GSI homepage banner '(.*?)'$/, (banner) => {
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]')
//     .assert.containsText('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]',banner)
// });
// Then(/^I see GSI homepage created banner$/, () => {
//     var fs = require('fs')
//     var banner = fs.readFileSync('./e2e-tests/validate-value/orgName_config.json','utf8')
//     banner = banner.toUpperCase()
//     return client
//     .useXpath()
//     .waitForElementPresent('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]')
//     .assert.containsText('//*[@id="__next"]/div/div/div[2]/div[1]/div/div[1]/p[1]',banner)
// });
// Then(/^I should see account inactive modal$/, () => {
//     return client
//     .useXpath()
//     .waitForElementPresent('/html/body/div[3]/div/div[3]')
//     .assert.containsText('/html/body/div[3]/div/div[3]','Maaf akun anda non aktif')
//     .waitForElementPresent('/html/body/div[3]/div/div[4]/div/button')
//     .click('/html/body/div[3]/div/div[4]/div/button')
//     .pause(500)
// });
// Then(/^I logout$/, () => {
//     return client
//     .url('https://agsidev.gsilab.id/home')
//     .useXpath()
//     .pause(5000)
//     //Click account
//     .waitForElementPresent('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/span')
//     .click('//*[@id="__next"]/div/div/div[1]/header/div/div[4]/span')
//     .pause(1000)
//     //Click log out
//     .waitForElementPresent('/html/body/div[3]/div[3]/ul/li')
//     .click('/html/body/div[3]/div[3]/ul/li')
//     .pause(5000)
//     // .assert.urlEquals('https://agsidev.gsilab.id/home')
// });