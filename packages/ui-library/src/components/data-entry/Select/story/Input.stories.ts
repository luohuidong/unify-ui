import type { Meta, StoryObj } from "@storybook/vue3";
import { UniSelect } from "@/components";

import ShowCaseBasicUsage from "./BasicUsage.vue";

const meta = {
  title: "Data Entry/Select",
  component: UniSelect,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniSelect>;

export default meta;

type Story = StoryObj<typeof UniSelect>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage />",
  }),
};
