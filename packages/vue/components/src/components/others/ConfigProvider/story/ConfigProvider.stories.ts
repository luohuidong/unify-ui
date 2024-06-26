import type { Meta, StoryObj } from "@storybook/vue3";

import ConfigProvider from "../index.vue";
import ShowCaseBasicUsage from "./BasicUsage.vue";

const meta = {
  title: "Others/ConfigProvider",
  component: ConfigProvider,
  tags: ["autodocs"],
  argTypes: {
    locale: { control: "radio", options: ["en-US", "zh-CN"] },
    fallbackLocale: { control: "radio", options: ["en-US", "zh-CN"] },
  },
} satisfies Meta<typeof ConfigProvider>;

export default meta;
type Story = StoryObj<typeof ConfigProvider>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage />",
  }),
};
