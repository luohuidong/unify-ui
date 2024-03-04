import type { Meta, StoryObj } from "@storybook/vue3";

import UniRadio from "../UniRadio.vue";
import ShowCaseBasicUsage from "./BasicUsage.vue";
import ShowCaseRadioGroup from "./RadioGroup.vue";

const meta = {
  title: "Data Entry/Radio",
  component: UniRadio,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniRadio>;

export default meta;
type Story = StoryObj<typeof UniRadio>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage />",
  }),
};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { ShowCaseRadioGroup },
    setup: () => ({ args }),
    template: "<ShowCaseRadioGroup />",
  }),
};
