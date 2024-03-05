import type { Meta, StoryObj } from "@storybook/vue3";

import { UniCheckboxGroup } from "@/index";

const meta = {
  title: "Data Entry/CheckboxGroup",
  component: UniCheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    onChange: {},
  },
} satisfies Meta<typeof UniCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof UniCheckboxGroup>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Checkbox: UniCheckboxGroup },
    setup: () => ({ args }),
    template: '<Checkbox v-model="args.modelValue" v-bind="args" />',
  }),
  args: {
    modelValue: new Set<string>(),
    options: [
      {
        label: "option1",
        value: "option1",
      },
      {
        label: "option2",
        value: "option2",
      },
      {
        label: "option3",
        value: "option3",
      },
    ],
    disabled: false,
    inline: false,
  },
};

export const Checked: Story = {
  render: (args) => ({
    components: { UniCheckboxGroup },
    setup: () => ({ args }),
    template: '<UniCheckboxGroup v-model="args.modelValue" v-bind="args" />',
  }),
  args: {
    ...BasicUsage.args,
    modelValue: new Set(["option1", "option2"]),
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { UniCheckboxGroup },
    setup: () => ({ args }),
    template: '<UniCheckboxGroup v-model="args.modelValue" v-bind="args" />',
  }),
  args: {
    ...BasicUsage.args,
    disabled: true,
  },
};

export const Inline: Story = {
  render: (args) => ({
    components: { UniCheckboxGroup },
    setup: () => ({ args }),
    template: '<UniCheckboxGroup v-model="args.modelValue" v-bind="args" />',
  }),
  args: {
    ...BasicUsage.args,
    inline: true,
  },
};
