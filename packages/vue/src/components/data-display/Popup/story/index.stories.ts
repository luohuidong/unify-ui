import type { Meta, StoryObj } from "@storybook/vue3";
import { UniPopup, UniButton } from "@/components";

import ShowCaseTriggerMethod from "./CaseTriggerMethod.vue";

const meta = {
  title: "Data Display/Popup",
  component: UniPopup,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "radio", options: ["top", "bottom", "left", "right"] },
    showArrow: { control: "boolean" },
    trigger: { control: "radio", options: ["hover", "click", "controlled"] },
    visible: { control: "boolean" },
    disabled: { control: "boolean" },
    offset: { control: "number" },
  },
} satisfies Meta<typeof UniPopup>;

export default meta;
type Story = StoryObj<typeof UniPopup>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { UniPopup, UniButton },
    setup: () => ({ args }),
    template: `
      <div :style="{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }">
        <UniPopup v-bind="args">
          <UniButton>Hover over me!</UniButton>

          <template #content>
            <div :style="{ width: '100px', height: '100px' }">{{ args.placement }}</div>
          </template>
        </UniPopup>
      </div>
    `,
  }),
  args: {
    placement: "top",
    showArrow: true,
    trigger: "hover",
    offset: 10,
    disabled: false,
    appendToBody: true,
  },
};

export const TriggerMethod: Story = {
  render: (args) => ({
    components: { ShowCaseTriggerMethod },
    setup: () => ({ args }),
    template: "<ShowCaseTriggerMethod />",
  }),
};
