const { convertXlsxToJson } = require("./cypress/plugins");

module.exports = {
  viewportWidth: 1280,
  viewportHeight: 720,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        readXlsx({ fileName }) {
         return convertXlsxToJson(fileName);
        },
      });
    },
  },
};
