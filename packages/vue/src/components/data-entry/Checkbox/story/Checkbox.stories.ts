import type { Meta, StoryObj } from "@storybook/vue3";

import { UniCheckbox } from "@/index";

const meta = {
  title: "Data Entry/Checkbox",
  component: UniCheckbox,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    onChange: {},
  },
} satisfies Meta<typeof UniCheckbox>;

export default meta;
type Story = StoryObj<typeof UniCheckbox>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { UniCheckbox },
    setup: () => ({ args }),
    template: "<UniCheckbox v-bind='args'/>",
  }),
  args: {
    label: "option",
    checked: false,
    value: "test",
    indeterminate: false,
    disabled: false,
  },
};

export const Checked: Story = {
  render: (args) => ({
    components: { UniCheckbox },
    setup: () => {
      return { args };
    },
    template:
      '<UniCheckbox  v-model:checked="args.checked" v-bind="args">UniCheckbox</UniCheckbox>',
  }),
  args: {
    ...BasicUsage.args,
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { UniCheckbox },
    setup: () => ({ args }),
    template: '<UniCheckbox v-model:checked="args.checked" v-bind="args">UniCheckbox</UniCheckbox>',
  }),
  args: {
    ...BasicUsage.args,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { UniCheckbox },
    setup: () => ({ args }),
    template: '<UniCheckbox v-model:checked="args.checked" v-bind="args">UniCheckbox</UniCheckbox>',
  }),
  args: {
    ...BasicUsage.args,
    indeterminate: true,
  },
};
