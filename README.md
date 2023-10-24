# AutomationFun

Cypress Automation Framework Setup
This repository contains Cypress tests designed to automate the testing of the LENNAR Home webpage at assignment--lennar.netlify.app/.

Prerequisites
Before running the tests, you need to set up the following:

- Ensure you have a stable internet connection 

- Visual Studio Code: Download and install Visual Studio Code from the official website.

- Node.js and npm: Ensure Node.js and npm are installed on your system. If not, download and install them from the official Node.js website.


Installing Cypress
Follow these steps to install the Cypress automation framework:

- Open your terminal within Visual Studio Code (or command prompt or PowerShell).

- Navigate to the project directory where you have cloned this repository.

Run the following command to install Cypress:

- npm init (follow all prompts or skip through it by pressing enter)

- npm install
   
- npm install cypress --save-dev

This will download and install Cypress locally within your project.

Running Tests
After successfully installing Cypress, you can run the tests with the following steps:

Open Visual Studio Code and navigate to the project directory.

In the terminal within VS Code, run the following command to open Cypress:

- npx cypress open

This will open the Cypress Test Runner.

In the Test Runner, click on the test file you want to run ( for example: lennar-home-schedule-a-tour.cy.js). Cypress will open a new browser window and run the tests.

Notes
The test should be set in the cypress/e2e folder path (cypress/e2e/cypress/e2e/lennar-home-schedule-a-tour.cy.js) to be accessed in the test runner spec tab.

Ensure you have a stable internet connection while running the tests as they rely on accessing the LENNAR Home webpage.

If there are any issues during installation or running the tests, refer to the official Cypress documentation for troubleshooting.

Please reach out if you have any questions . Have fun!
