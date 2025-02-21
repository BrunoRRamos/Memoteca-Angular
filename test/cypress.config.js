const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

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
          try {
            const filePath = path.join(__dirname, "cypress", "fixtures", `${fileName}.xlsx`);
            const buffer = fs.readFileSync(filePath);
            const workbook = XLSX.read(buffer, { type: "buffer" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

            return jsonData[0];
          } catch (error) {
            console.error("Erro ao converter o arquivo:", error);
            return null;
          }
        },
      });
    },
  },
};
