const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://assignment--lennar.netlify.app/',
    "defaultCommandTimeout": 45000,
    "pageLoadTimeout": 45000,
    "experimentalStudio": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});