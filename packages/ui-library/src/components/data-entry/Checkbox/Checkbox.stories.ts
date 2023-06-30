import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import Checkbox from "./UniCheckbox.vue";

const meta = {
  title: "General/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
  },
  args: {},
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const actionsData = {
  onClick: action("click"),
};

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" v-model:checked="args.checked">Checkbox</Checkbox>',
  }),
  args: {
    label: "test",
    checked: false,
    value: "test",
    indeterminate: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" v-model:checked="args.checked">Checkbox</Checkbox>',
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
    template: '<Checkbox v-bind="args" v-model:checked="args.checked">Checkbox</Checkbox>',
  }),
  args: {
    ...BasicUsage.args,
    indeterminate: true,
  },
};
