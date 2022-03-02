const chromedriver = require('chromedriver');
 
require('dotenv').config();
 
module.exports = {
 "src_folders" : ["e2e-tests"],
 "custom_commands_path": ["./e2e-tests/custom_commands", "./node_modules/nightwatch-xhr/es5/commands"],
 "custom_assertions_path": ["./node_modules/nightwatch-xhr/es5/assertions"],
 
 "webdriver" : {
 "start_process": true,
 "server_path": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
 "port": 9515
 },
 'test_workers': {
 'enabled': false, // Set to true to allow run test in parallel. No compatible with execute test in more than one browser
 'workers': 'auto',
 },
 'test_settings': {
 'default': {
 'webdriver': {
 'server_path': "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
 },
 'desiredCapabilities': { // use Chrome as the default browser for tests
 'browserName': 'chrome'
 }
 },
 'chrome': {
 'webdriver' : {
 'start_process': true, // tells nightwatch to start/stop the process by itself
 'server_path': "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
 'host': '127.0.0.1',
 'port': 9515,
 'log_path' : './e2e-tests/tests_output/logs/'
 },
 'screenshots': {
 'enabled': true, // if you want to keep screenshots
 'path': './e2e-tests/tests_output/screenshots' // save screenshots here, but you can define it when you do the screenshot
 },
 'globals': {
 'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
 },
 'desiredCapabilities': {
 'browserName': 'chrome',
 'javascriptEnabled': true, // turn off to test progressive enhancement
 'acceptInsecureCerts' : true,
 "acceptSslCerts" : true,
 "chromeOptions": {
 "args": ["--disable-gpu", "--no-sandbox", "--start-maximized", "--window-size=1920,1200", "--disable-dev-shm-usage"]
 }
 }
 },
 'safari': {
 'webdriver': {
 'start_process': true, // tells nightwatch to start/stop the process by itself
 'server_path': '/usr/bin/safaridriver',
 'host': '127.0.0.1',
 'port': 4445,
 'log_path' : './tests_output/logs-e2e/'
 // 'cli_args': [
 // '--log', 'debug'
 // ]
 },
 'screenshots': {
 'enabled': true, // if you want to keep screenshots
 'path': './e2e-tests/tests_output/' // save screenshots here, but you can define it when you do the screenshot
 },
 'globals': {
 'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
 },
 'desiredCapabilities': {
 'browserName': 'safari',
 'marionette': true,
 'javascriptEnabled': true, // turn off to test progressive enhancement
 'acceptInsecureCerts' : true
 }
 },
//  'firefox': {
//  'webdriver': {
//  'start_process': true, // tells nightwatch to start/stop the process by itself
//  'server_path': './node_modules/.bin/geckodriver',
//  'host': '127.0.0.1',
//  'port': 4444,
//  'log_path' : './tests_output/logs-e2e/'
//  // 'cli_args': [
//  // '--log', 'debug'
//  // ]
//  },
//  'screenshots': {
//  'enabled': true, // if you want to keep screenshots
//  'path': './e2e-tests/tests_output/' // save screenshots here, but you can define it when you do the screenshot
//  },
//  'globals': {
//  'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
//  },
//  'desiredCapabilities': {
//  'browserName': 'firefox',
//  'marionette': true,
//  'javascriptEnabled': true, // turn off to test progressive enhancement
//  'acceptInsecureCerts' : true,
//  'alwaysMatch': {
//  'moz:firefoxOptions': {
//  'args': [ "--headless" ]
//  }
//  }
//  }
//  },
//  'edge': {
//  'webdriver': {
//  'start_process': true, // tells nightwatch to start/stop the process by itself
//  'server_path': './node_modules/edgedriver/msedgedriver',
//  'port': 4450,
//  'log_path' : './tests_output/logs-e2e/',
//  'use_legacy_jsonwire': false
 // 'cli_args': [
 // '--log', 'debug'
 // ]
//  },
//  'screenshots': {
//  'enabled': true, // if you want to keep screenshots
//  'path': './e2e-tests/tests_output/' // save screenshots here, but you can define it when you do the screenshot
//  },
//  'globals': {
//  'waitForConditionTimeout': 5000 // sometimes internet is slow so wait.
//  },
//  'desiredCapabilities': {
//  "browserName": "MicrosoftEdge"
 // "browserName": "microsoftedge",
 // "javascriptEnabled": true
 // "acceptSslCerts": true,
 // "setEdgeChromium": true,
 // "UseChromium": true,
 // "edgeOptions": {
 // "args": ["--disable-gpu", "--headless"]
 // }}}
 }
};