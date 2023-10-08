import type { Meta, StoryObj } from "@storybook/vue3";
import { UniSelect } from "@/components";

import ShowCaseBasicUsage from "./BasicUsage.vue";
import ShowCaseDisabled from "./Disabled.vue";
import ShowCaseDisabledOption from "./DisabledOption.vue";
import ShowCaseLocalSearch from "./LocalSearch.vue";
import ShowCaseLoading from "./Loading.vue";
import ShowCaseRemoteSearch from "./RemoteSearch.vue";
import ShowCaseMultiple from "./Multiple.vue";

const meta = {
  title: "Data Entry/Select",
  component: UniSelect,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniSelect>;

export default meta;

type Story = StoryObj<typeof UniSelect>;

export const BasicUsage: Story = {
  render: () => ({
    components: { ShowCaseBasicUsage },
    template: "<ShowCaseBasicUsage />",
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { ShowCaseDisabled },
    template: "<ShowCaseDisabled />",
  }),
};

export const DisabledOption: Story = {
  render: () => ({
    components: { ShowCaseDisabledOption },
    template: "<ShowCaseDisabledOption />",
  }),
};

export const Loading: Story = {
  render: () => ({
    components: { ShowCaseLoading },
    template: "<ShowCaseLoading />",
  }),
};

export const LocalSearch: Story = {
  render: () => ({
    components: { ShowCaseLocalSearch },
    template: "<ShowCaseLocalSearch />",
  }),
};

export const RemoteSearch: Story = {
  render: () => ({
    components: { ShowCaseRemoteSearch },
    template: "<ShowCaseRemoteSearch />",
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: { ShowCaseMultiple },
    template: "<ShowCaseMultiple />",
  }),
};
