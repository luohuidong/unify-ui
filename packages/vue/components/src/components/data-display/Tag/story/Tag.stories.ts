import type { Meta, StoryObj } from "@storybook/vue3";

import Tag from "../index.vue";
import CloseableTags from "./CloseableTags.vue";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["default", "info", "success", "warning", "error"] },
    onClose: {},
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
        args,
        presets,
      };
    },
    template:
      '<Tag v-for="preset in presets" :key="preset" :type="preset" v-bind="args">{{ preset }}</Tag>',
  }),
};

export const Closable: Story = {
  render: (args) => ({
    components: { CloseableTags },
    setup: () => ({ args }),
    template: "<CloseableTags />",
  }),
};
