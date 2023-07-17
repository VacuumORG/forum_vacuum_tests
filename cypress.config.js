const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    downloadsFolder: 'downloads',
    fixturesFolder: 'fixtures',
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFolder: 'suppport/**.js',
    supportFile: 'support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
