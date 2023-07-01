import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import Tag from "./index.vue";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["default", "info", "success", "warning", "error"] },
  },
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Tag },
    setup: () => ({ args }),
    template: '<Tag v-bind="args">Tag</Tag>',
  }),
  args: {},
};

export const Presets: Story = {
  render: (args) => ({
    components: { Tag },
    setup: () => {
      const presets = ["default", "info", "success", "warning", "error"];

      return {
        presets,
      };
    },
    template: '<Tag v-for="preset in presets" :key="preset" :type="preset">{{ preset }}</Tag>',
  }),
};
