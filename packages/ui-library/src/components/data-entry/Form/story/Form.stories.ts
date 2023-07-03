import type { Meta, StoryObj } from "@storybook/vue3";

import { UniForm } from "@/components";
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseCustomizedFormControl from "./ShowCaseCustomizedFormControl.vue";
import ShowCaseLayout from "./ShowCaseLayout.vue";

const meta = {
  title: "Data Entry/Form",
  component: UniForm,
  tags: ["autodocs"],
  argTypes: {
    layout: { control: "radio", options: ["horizontal", "vertical", "inline"] },
  },
  args: {},
} satisfies Meta<typeof UniForm>;

export default meta;
type Story = StoryObj<typeof UniForm>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({
      args,
    }),
    template: "<ShowCaseBasicUsage />",
  }),
  args: {},
};

export const CustomizedFormControl: Story = {
  render: (args) => ({
    components: { ShowCaseCustomizedFormControl },
    setup: () => ({
      args,
    }),
    template: "<ShowCaseCustomizedFormControl />",
  }),
};

export const Layout: Story = {
  render: (args) => ({
    components: { ShowCaseLayout },
    setup: () => ({
      args,
    }),
    template: "<ShowCaseLayout />",
  }),
};
