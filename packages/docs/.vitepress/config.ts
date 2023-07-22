import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Unify UI",
  appearance: false,
  themeConfig: {
    outline: [2, 3],
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/easy-ui-team/easy-ui" }],
    nav: [
      {
        text: "Guide",
        activeMatch: `^/guide/`,
        link: "/guide/getting-started.html",
      },
      {
        text: "Components",
        activeMatch: `^/components/`,
        link: "/components/general/button/",
      },
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
              { text: "Calendar", link: "/components/data-display/calendar/" },
              { text: "Empty", link: "/components/data-display/empty/" },
              { text: "Popup", link: "/components/data-display/popup/" },
              { text: "Table", link: "/components/data-display/table/" },
              { text: "Tag", link: "/components/data-display/tag/" },
              { text: "Tooltip", link: "/components/data-display/tooltip/" },
            ],
          },
          {
            text: "Data Entry",
            items: [
              { text: "Checkbox", link: "/components/data-entry/checkbox/" },
              { text: "CheckboxGroup", link: "/components/data-entry/checkbox-group/" },
              { text: "DatePicker", link: "/components/data-entry/date-picker/" },
              { text: "FileDropZone", link: "/components/data-entry/file-drop-zone/" },
              { text: "FilePicker", link: "/components/data-entry/file-picker/" },
              { text: "Form", link: "/components/data-entry/form/" },
              { text: "Input", link: "/components/data-entry/input/" },
              { text: "Password", link: "/components/data-entry/password/" },
              { text: "Radio", link: "/components/data-entry/radio/" },
              { text: "RadioGroup", link: "/components/data-entry/radio-group/" },
              { text: "Select", link: "/components/data-entry/select/" },
              { text: "Switch", link: "/components/data-entry/switch/" },
            ],
          },
          {
            text: "Feedback",
            items: [
              { text: "ConfirmModal", link: "/components/feedback/confirm-modal/" },
              { text: "Modal", link: "/components/feedback/modal/" },
              { text: "NotFound", link: "/components/feedback/not-found/" },
            ],
          },
          {
            text: "Others",
            items: [{ text: "ConfigProvider", link: "/components/others/config-provider/" }],
          },
        ],
      },
    ],
  },
});
