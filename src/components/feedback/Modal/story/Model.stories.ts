import type { Meta, StoryObj } from "@storybook/vue3";

import UniModal from "../UniModal.vue";
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseConfirmModal from "./ShowCaseConfirmModal.vue";
import ShowCaseInternationalize from "./ShowCaseInternationalize.vue";

const meta = {
  title: "Feedback/Modal",
  component: UniModal,
  tags: ["autodocs"],
} satisfies Meta<typeof UniModal>;

export default meta;
type Story = StoryObj<typeof UniModal>;

export const BasicUsage: Story = {
  render: (args) => ({
    components: { ShowCaseBasicUsage },
    setup: () => ({ args }),
    template: "<ShowCaseBasicUsage />",
  }),
};

export const ConfirmModal: Story = {
  render: (args) => ({
    components: { ShowCaseConfirmModal },
    setup: () => ({ args }),
    template: "<ShowCaseConfirmModal />",
  }),
};

export const Internationalize: Story = {
  render: (args) => ({
    components: { ShowCaseInternationalize },
    setup: () => ({ args }),
    template: "<ShowCaseInternationalize />",
  }),
};
