import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import CheckboxGroup from "./UniCheckboxGroup.vue";

const meta = {
  title: "General/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  excludeStories: /.*Data$/,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const actionsData = {
  onClick: action("click"),
};

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Checkbox: CheckboxGroup },
    setup: () => ({ args }),
    template: '<Checkbox v-bind="args" v-model:checked="args.checked" />',
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

export const Disabled: Story = {
  render: (args) => ({
    components: { CheckboxGroup },
    setup: () => ({ args }),
    template: '<CheckboxGroup v-bind="args" v-model:checked="args.checked" />',
  }),
  args: {
    ...BasicUsage.args,
    disabled: true,
  },
};

export const Inline: Story = {
  render: (args) => ({
    components: { CheckboxGroup },
    setup: () => ({ args }),
    template: '<CheckboxGroup v-bind="args" v-model:checked="args.checked" />',
  }),
  args: {
    ...BasicUsage.args,
    inline: true,
  },
};
