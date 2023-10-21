import type { Meta, StoryObj } from "@storybook/vue3";

import Table from "../index.vue";
import ShowCaseBaiscUsage from "./NormalUse.vue";
import ShowCaseFixedColumn from "./FixedColumn.vue";
import ShowCaseSingleSelection from "./SingleSelection.vue";
import ShowCaseMultipleSelection from "./MultipleSelection.vue";
import ShowCaseExpandableRow from "./ExpandableRow.vue";
import ShowCaseCustomHeader from "./CustomHeader.vue";
import ShowCaseNodataCase from "./Nodata.vue";
import ShowCaseSort from "./Sort.vue";
import ShowCaseTextEllipsis from "./TextEllipsis.vue";

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const BasicUsage: Story = {
  render: () => ({
    components: { ShowCaseBaiscUsage },
    template: "<ShowCaseBaiscUsage />",
  }),
};

export const FixedColumn: Story = {
  render: () => ({
    components: { ShowCaseFixedColumn },
    template: "<ShowCaseFixedColumn />",
  }),
};

export const SingleSelection: Story = {
  render: () => ({
    components: { ShowCaseSingleSelection },
    template: "<ShowCaseSingleSelection />",
  }),
};

export const MultipleSelection: Story = {
  render: () => ({
    components: { ShowCaseMultipleSelection },
    template: "<ShowCaseMultipleSelection />",
  }),
};

export const ExpandableRow: Story = {
  render: () => ({
    components: { ShowCaseExpandableRow },
    template: "<ShowCaseExpandableRow />",
  }),
};

export const CustomHeader: Story = {
  render: () => ({
    components: { ShowCaseCustomHeader },
    template: "<ShowCaseCustomHeader />",
  }),
};

export const NodataCase: Story = {
  render: () => ({
    components: { ShowCaseNodataCase },
    template: "<ShowCaseNodataCase />",
  }),
};

export const Sort: Story = {
  render: () => ({
    components: { ShowCaseSort },
    template: "<ShowCaseSort />",
  }),
};

export const TextEllipsis: Story = {
  render: () => ({
    components: { ShowCaseTextEllipsis },
    template: "<ShowCaseTextEllipsis />",
  }),
};
