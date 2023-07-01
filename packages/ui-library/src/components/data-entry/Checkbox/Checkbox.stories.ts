import type { Meta, StoryObj } from "@storybook/vue3";

import Checkbox from "./UniCheckbox.vue";

const meta = {
  title: "Data Entry/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    onChange: {},
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: "<Checkbox v-bind='args'/>",
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
    components: { Checkbox },
    setup: () => {
      return { args };
    },
    template: '<Checkbox  v-model:checked="args.checked" v-bind="args">Checkbox</Checkbox>',
  }),
  args: {
    ...BasicUsage.args,
    checked: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-model:checked="args.checked" v-bind="args">Checkbox</Checkbox>',
  }),
  args: {
    ...BasicUsage.args,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-model:checked="args.checked" v-bind="args">Checkbox</Checkbox>',
  }),
  args: {
    ...BasicUsage.args,
    indeterminate: true,
  },
};
