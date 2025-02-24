const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

function convertXlsxToJson(fileName, target) {
    try {
        const filePath = path.join(__dirname, "..", "fixtures", `${fileName}.xlsx`);
        const buffer = fs.readFileSync(filePath);
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        return jsonData[target];
    } catch (error) {
        console.log("Erro ao converter o arquivo:", error);
        return null;
    }
}

module.exports = {
    convertXlsxToJson,
}