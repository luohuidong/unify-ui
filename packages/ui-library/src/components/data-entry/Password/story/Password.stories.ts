import type { Meta, StoryObj } from "@storybook/vue3";

import Password from "../index.vue";

const meta = {
  title: "Data Entry/Password",
  component: Password,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["normal", "error"] },
    onInput: {},
    onChange: {},
  },
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof Password>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Password },
    setup: () => ({ args }),
    template: '<Password v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
    disabled: false,
    placeholder: "Enter your password",
  },
};
