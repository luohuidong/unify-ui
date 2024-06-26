import fs from "node:fs";
import url from "node:url";
import { changeMarkdownContent } from "../dist/changeMarkdownContent/index.js";

const markdownFilePath = url.fileURLToPath(new URL("./markdown-input.md", import.meta.url));
const text = fs.readFileSync(markdownFilePath, {
  encoding: "utf8",
});

const content = await changeMarkdownContent(text);
console.log(content);
