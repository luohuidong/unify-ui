import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Easy UI",
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Components", link: "/components/general/button/" },
    ],
    sidebar: {
      "guide/": [
        {
          text: "Guide",
          items: [{ text: "Getting Started", link: "/guide/getting-started" }],
        },
      ],
      "components/": [
        {
          text: "Components",
          items: [
            {
              text: "General",
              items: [{ text: "Button", link: "/components/general/button/" }],
            },
          ],
        },
      ],
    },
  },
});
