import fs from "node:fs";
import path from "node:path";

export const loadJsonData = <T>(filePath: string): T => {
  const fullPath = path.join(__dirname, filePath);
  const jsonData = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(jsonData);
};
