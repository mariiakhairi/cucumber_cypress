const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    video: false,
    specPattern: "cypress/e2e/cucumber-tests/step-definitions/*.feature",
  },
});
