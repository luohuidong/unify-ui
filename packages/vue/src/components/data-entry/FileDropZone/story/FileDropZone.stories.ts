import type { Meta, StoryObj } from "@storybook/vue3";

import FileDropZone from "../index.vue";
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseCustomizeContent from "./ShowCaseCustomizeContent.vue";
import ShowCaseMultipleFiles from "./ShowCaseMultipleFiles.vue";

const meta = {
  title: "Data Entry/FileDropZone",
  component: FileDropZone,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FileDropZone>;

export default meta;
type Story = StoryObj<typeof FileDropZone>;

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

export const CustomizeContent: Story = {
  render: (args) => ({
    components: { ShowCaseCustomizeContent },
    setup: () => {
      return { args };
    },
    template: "<ShowCaseCustomizeContent />",
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
