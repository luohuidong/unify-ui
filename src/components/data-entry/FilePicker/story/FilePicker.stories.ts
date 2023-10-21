import type { Meta, StoryObj } from "@storybook/vue3";

import FilePicker from "../index.vue";
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseMultipleFiles from "./ShowCaseMultipleFiles.vue";

const meta = {
  title: "Data Entry/FilePicker",
  component: FilePicker,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilePicker>;

export default meta;
type Story = StoryObj<typeof FilePicker>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => {
      return { args };
    },
    template: "<ShowCaseBasicUsage />",
  }),
  args: {},
};

export const MultipleFiles: Story = {
  render: (args) => ({
    components: { ShowCaseMultipleFiles },
    setup: () => {
      return { args };
    },
    template: "<ShowCaseMultipleFiles />",
  }),
  args: {},
};
