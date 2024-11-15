const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
   // baseUrl:"https://pokeapi.co/api/v2",
    baseUrl:"https://reqres.in/api/",
    specPattern: 'cypress/e2e/**/*.ts', 
  },
});
