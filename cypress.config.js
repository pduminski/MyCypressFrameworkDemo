const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1200,

  e2e: {
    baseUrl: "http://simpletestsite.fabrykatestow.pl/",
    // baseUrl: "http://www.webdriveruniversity.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    testIsolation: false,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
    },
  },
});
