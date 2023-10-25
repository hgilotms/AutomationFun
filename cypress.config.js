const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://assignment--lennar.netlify.app/',
    "defaultCommandTimeout": 90000,
    "pageLoadTimeout": 90000,
    "experimentalStudio": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
