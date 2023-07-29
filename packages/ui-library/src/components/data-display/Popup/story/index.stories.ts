import type { Meta, StoryObj } from "@storybook/vue3";
import { UniPopup } from "@/components";

import ShowCaseBaseUsage from "./CaseBaseUsage.vue";
import ShowCaseTriggerMethod from "./CaseTriggerMethod.vue";

const meta = {
  title: "Data Display/Popup",
  component: UniPopup,
  tags: ["autodocs"],
} satisfies Meta<typeof UniPopup>;

export default meta;
type Story = StoryObj<typeof UniPopup>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBaseUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBaseUsage />",
  }),
};

export const TriggerMethod: Story = {
  render: (args) => ({
    components: { ShowCaseTriggerMethod },
    setup: () => ({ args }),
    template: "<ShowCaseTriggerMethod />",
  }),
};
