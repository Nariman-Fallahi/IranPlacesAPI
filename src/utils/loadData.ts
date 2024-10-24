import fs from "node:fs";
import path from "node:path";

export const loadJsonData = <T>(filePath: string): T => {
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  
  const fullPath = path.join(__dirname, filePath);
  const jsonData = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(jsonData);
};
