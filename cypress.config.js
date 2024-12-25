const { defineConfig } = require("cypress");

// Export Cypress config
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },

    // Optional: other Cypress configuration settings
    viewportWidth: 1000,
    viewportHeight: 660,
    video: true,
    screenshotOnRunFailure: true,
  },

  // env: {
  //   COVERAGE: true,  // Custom environment variable if needed
  // },
});
