import type { Plugin } from "vite";
import { changeMarkdownContent } from "./changeMarkdownContent/index.js";

const fileRegex = /\.(md)$/;

export default function (): Plugin {
  return {
    name: "vite-plugin-uinify-ui",

    enforce: "pre",

    async transform(src, id) {
      if (fileRegex.test(id)) {
        const code = await changeMarkdownContent(src);
        return {
          code,
          map: null,
        };
      }
      return null;
    },
  };
}
