import type { Meta, StoryObj } from "@storybook/vue3";

import UniEmpty from "./index.vue";

const meta = {
  title: "Data Display/Empty",
  component: UniEmpty,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniEmpty>;

export default meta;
type Story = StoryObj<typeof UniEmpty>;

export const BasicUsage: Story = {
  render: () => ({
    components: { UniEmpty },
    template: "<UniEmpty />",
  }),
};
