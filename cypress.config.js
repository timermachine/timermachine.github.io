const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'v5kvre',
  e2e: {
    baseUrl: 'http://localhost:4000',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
