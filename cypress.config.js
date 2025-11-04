const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // === Step1: Enable video recording === //
  video: true,
  trashAssetsBeforeRuns: false, // This is command to not delete previous assets before new test runs
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // === Step2: Disable test isolation === //
    testIsolation: false,
  },
});
