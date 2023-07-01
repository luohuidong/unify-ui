import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import UniButton from "./index.vue";

const meta = {
  title: "General/Button",
  component: UniButton,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["primary", "secondary", "soft"] },
    size: { control: "radio", options: ["xs", "s", "m", "l", "xl"] },
    htmlType: { control: "radio", options: ["button", "submit", "reset"] },
    onClick: {},
  },

  excludeStories: /.*Data$/,
} satisfies Meta<typeof UniButton>;

export default meta;
type Story = StoryObj<typeof UniButton>;

export const actionsData = {
  onClick: action("click"),
};

export const SoftButton: Story = {
  render: (args) => ({
    components: { UniButton },
    setup: () => ({ args }),
    template: '<UniButton v-bind="args">UniButton</UniButton>',
  }),
  args: {
    size: "m",
    disabled: false,
    rounded: false,
    htmlType: "button",
  },
};

export const PrimaryButton: Story = {
  render: (args) => ({
    components: { UniButton },
    setup: () => ({ args }),
    template: '<UniButton v-bind="args">UniButton</UniButton>',
  }),
  args: {
    type: "primary",
  },
};

export const SecondaryButton: Story = {
  render: (args) => ({
    components: { UniButton },
    setup: () => ({ args }),
    template: '<UniButton v-bind="args">UniButton</UniButton>',
  }),
  args: {
    type: "secondary",
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { UniButton },
    setup: () => ({ args }),
    template: '<UniButton v-bind="args">UniButton</UniButton>',
  }),
  args: {
    disabled: true,
  },
};

export const BorderRounded: Story = {
  render: (args) => ({
    components: { UniButton },
    setup: () => ({ args }),
    template: '<UniButton v-bind="args">UniButton</UniButton>',
  }),
  args: {
    rounded: true,
  },
};
