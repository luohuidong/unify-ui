import type { Meta, StoryObj } from "@storybook/vue3";

import UniPagination from "../index.vue";
import ShowCaseBasicUsage from "./BasicUsage.vue";

const meta = {
  title: "Data Display/Pagination",
  component: UniPagination,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniPagination>;

export default meta;
type Story = StoryObj<typeof UniPagination>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup() {
      return { args };
    },
    template: "<ShowCaseBasicUsage />",
  }),
};
