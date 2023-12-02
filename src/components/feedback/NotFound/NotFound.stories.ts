import type { Meta, StoryObj } from "@storybook/vue3";

import NotFound from "./index.vue";

const meta = {
  title: "Feedback/NotFound",
  component: NotFound,
  tags: ["autodocs"],
  argTypes: {
    align: { control: "radio", options: ["left", "center", "right"] },
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof NotFound>;

export const SoftButton: Story = {
  render: (args) => ({
    components: { NotFound },
    setup: () => ({ args }),
    template: '<NotFound v-bind="args">NotFound</NotFound>',
  }),
  args: {
    align: "left",
  },
};
