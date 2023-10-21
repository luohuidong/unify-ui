import type { Meta, StoryObj } from "@storybook/vue3";

import { UniSwitch } from "@/components";
import ShowCaseBasicUsage from "./BasicUsage.vue";
import ShowCaseDisabled from "./Disabled.vue";

const meta = {
  title: "Data Entry/Switch",
  component: UniSwitch,
  tags: ["autodocs"],
  argTypes: {
    onChange: {},
  },
} satisfies Meta<typeof UniSwitch>;

export default meta;
type Story = StoryObj<typeof UniSwitch>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage v-bind='args'/>",
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { ShowCaseDisabled },
    setup: () => ({ args }),
    template: "<ShowCaseDisabled v-bind='args'/>",
  }),
};
