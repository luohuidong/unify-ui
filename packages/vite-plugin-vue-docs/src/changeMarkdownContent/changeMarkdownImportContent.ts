import * as babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import { default as generate } from "@babel/generator";
import type { Statement } from "@babel/types";
import { default as template } from "@babel/template";

export function changeMarkdownImportContent(source: string) {
  const babelAst = babelParser.parse(source, {
    sourceType: "module",
  });

  traverse.default(babelAst, {
    Program(path) {
      const buildImport = template.default.ast(
        "import { defineClientComponent } from 'vitepress'"
      ) as Statement;
      path.node.body.unshift(buildImport);
    },
    ImportDeclaration(path) {
      const node = path.node;
      const sourceValue = node.source.value;

      if (sourceValue.endsWith(".vue")) {
        const componentName = node.specifiers[0].local.name;

        const ast = template.default.ast(`
        const ${componentName} = defineClientComponent(() => {
          return import('${sourceValue}')
        })
      `);

        path.replaceWith(ast as Statement);
      }
    },
  });

  const { code } = generate.default(babelAst);
  return code;
}
