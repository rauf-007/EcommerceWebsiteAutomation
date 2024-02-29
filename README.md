** Project Description **

This project is automated using javascript playwright framework. Implement this project using Page Object Model(POM). It give results in seconds and report issues and bugs in very less period of time.
I am implementing many testing techniques in this automation framework which includes: cross browser testing, testing on different mobile devices, testing on different screen sizes, accessibility testing, parallel testing, usability testing, visualization testing ,security testing, negative testing, testing on different operating systems etc.
** How to Install and Run the Project **

Install node js
Download this repository
Open project in VS Code
Run this command to install the dependencies: npm init playwright@latest

** Generate report of test cases **

To generate report run this command: allure generate my-allure-results -o allure-report --clean
To open report run this command: allure open allure-report
** Cross browser testing **

Firefox: To execute test cases on firefow browser run this command: npx playwright test --headed --project="firefox"
Chromium: To execute test cases on chromium browser run this command: npx playwright test --headed --project="chromium"
Microsoft Edge: To execute test cases on this browser run command: npx playwright test --headed --project="Microsoft Edge"
Safari: To execute test cases on this browser run command: npx playwright test --headed --project="webkit"
Google Chrome: To execute test cases on this browser run command: npx playwright test --headed --project="Google Chrome"
** Testing on mobile devices **

Android: To execute test cases on android run this command: npx playwright test --headed --project="Mobile Chrome"
IOS: To execute test cases on IOS run this command: npx playwright test --headed --project="Mobile Safari"
** Run all tests parallel ** Run all the tests parallely use this command: npx playwright test --headed

** To run tests in a headed mode without showing browser ** To run tests in a headed mode without showing browser run this command: npx playwright test
