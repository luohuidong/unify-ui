import type { Meta, StoryObj } from "@storybook/vue3";

import AllIcons from "./AllIcons.vue";

const meta = {
  title: "Icons",
  component: AllIcons,
  tags: ["autodocs"],
} satisfies Meta<typeof AllIcons>;

export default meta;
type Story = StoryObj<typeof AllIcons>;

export const AllIcon: Story = {
  render: (args) => ({
    components: { AllIcons },
    template: "<AllIcons />",
  }),
};
