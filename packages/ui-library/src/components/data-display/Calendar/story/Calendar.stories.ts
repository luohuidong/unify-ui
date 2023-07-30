import type { Meta, StoryObj } from "@storybook/vue3";

import UniDatePicker from "../index.vue";
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseDisabledDate from "./ShowCaseDisabledDate.vue";

const meta = {
  title: "Data Display/Calendar",
  component: UniDatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof UniDatePicker>;

export default meta;
type Story = StoryObj<typeof UniDatePicker>;

export const BasicUsage: Story = {
  render: () => ({
    components: { ShowCaseBasicUsage },
    template: "<ShowCaseBasicUsage  />",
  }),
};

export const DisabledDate: Story = {
  render: () => ({
    components: { ShowCaseDisabledDate },
    template: "<ShowCaseDisabledDate />",
  }),
};
