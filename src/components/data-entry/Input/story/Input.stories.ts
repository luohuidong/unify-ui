import type { Meta, StoryObj } from "@storybook/vue3";

import Input from "../index.vue";
import ShowCaseAddOn from "./ShowCaseAddOn.vue";
import ShowCaseInlineAddOn from "./ShowCaseInlineAddOn.vue";

const meta = {
  title: "Data Entry/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["normal", "error"] },
    onInput: {},
    onChange: {},
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
  },
};

export const Placeholder: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
    placeholder: "placeholder",
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
    disabled: true,
  },
};

export const Readonly: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
    readonly: true,
  },
};

export const ErrorStatus: Story = {
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: '<Input v-bind="args" v-model="args.modelValue" />',
  }),
  args: {
    modelValue: "",
    status: "error",
  },
};

export const AddOn: Story = {
  render: (args) => ({
    components: { ShowCaseAddOn },
    template: "<ShowCaseAddOn />",
  }),
};

export const InlineAddOn: Story = {
  render: (args) => ({
    components: { ShowCaseInlineAddOn },
    template: "<ShowCaseInlineAddOn />",
  }),
};
