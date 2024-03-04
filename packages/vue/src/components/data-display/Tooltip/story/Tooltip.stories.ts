import type { Meta, StoryObj } from "@storybook/vue3";

import Tooltip from "../index.vue";

const meta = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "radio", options: ["top", "bottom", "left", "right"] },
    disabled: { control: "boolean" },
  },
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `
      <div :style="{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }">
        <Tooltip v-bind="args">Hover over me!</Tooltip>
      </div>
    `,
  }),
  args: {
    title: "This is a tooltip",
    placement: "top",
    disabled: false,
    appendToBody: true,
  },
};
