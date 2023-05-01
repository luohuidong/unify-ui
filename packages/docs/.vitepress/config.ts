import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Easy UI",
  appearance: false,
  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/easy-ui-team/easy-ui" },
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
              { text: "Empty", link: "/components/data-display/empty/" },
              { text: "Popup", link: "/components/data-display/popup/" },
              { text: "Table", link: "/components/data-display/table/" },
              { text: "Tooltip", link: "/components/data-display/tooltip/" },
            ],
          },
          {
            text: "Feedback",
            items: [
              { text: "NotFound", link: "/components/feedback/not-found/" },
            ],
          },
          {
            text: "Data Entry",
            items: [
              { text: "Input", link: "/components/data-entry/input/" },
              {
                text: "FilePicker",
                link: "/components/data-entry/file-picker/",
              },
              { text: "Switch", link: "/components/data-entry/switch/" },
            ],
          },
        ],
      },
    ],
  },
});
