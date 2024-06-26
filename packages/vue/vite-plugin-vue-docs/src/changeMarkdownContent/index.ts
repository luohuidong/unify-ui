import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";

import { getMarkdownImportContent } from "./getMarkdownImportContent.js";
import { changeMarkdownImportContent } from "./changeMarkdownImportContent.js";

const startRegExp = /^:::\sraw\n$/;
const endRegExp = /^\n:::$/;

export async function changeMarkdownContent(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (mdast: Root) => {
      visit(mdast, ["paragraph", "html"], (node) => {
        if (node.type === "paragraph") {
          visit(node, "text", (node) => {
            if (startRegExp.test(node.value)) {
              node.value = node.value + "<div>";
            }

            if (endRegExp.test(node.value)) {
              node.value = "</div>" + node.value;
            }
          });
        }

        if (node.type === "html" && node.value.includes("<script setup")) {
          const importContent = getMarkdownImportContent(node.value);
          const newImportContent = changeMarkdownImportContent(importContent);
          node.value = `<script setup lang="ts">\n${newImportContent}\n</script>`;
        }
      });
    })
    .use(remarkStringify)
    .process(content);

  return result.toString().replace(/\\</g, "<");
}
