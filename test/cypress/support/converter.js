import * as XLSX from "xlsx";
import { readFile } from "fs/promises";

const PATH = "../fixtures/";

const convertXlsxToJson = (fileName) => {
  try {
    const filePath = `${PATH}${fileName}.xlsx`;
    const buffer = readFile(filePath);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

    return JSON.stringify(jsonData, null, 2);
  } catch (error) {
    console.error("Erro ao converter o arquivo:", error);
  }
};

