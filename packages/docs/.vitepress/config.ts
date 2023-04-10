import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Easy UI",
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/luohuidong/easy-ui" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "Components",
        items: [
          {
            text: "General",
            items: [{ text: "Button", link: "/components/general/button/" }],
          },
          {
            text: "Data Display",
            items: [
              { text: "Tooltip", link: "/components/data-display/tooltip/" },
              { text: "Popup", link: "/components/data-display/popup/" },
            ],
          },
        ],
      },
    ],
  },
});
