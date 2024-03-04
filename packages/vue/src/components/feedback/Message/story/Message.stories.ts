import type { StoryObj } from "@storybook/vue3";

import ShowCaseBasicUsage from "./BasicUsage.vue";

const meta = {
  title: "Feedback/Message",
};

export default meta;
type Story = StoryObj;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage />",
  }),
};
