const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    //reportDir: '',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportPageTitle: 'Test Reports',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('./node_modules/cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    //baseUrl: 'https://seguros.tanner.cl/vida/cotizar'
  }
});
