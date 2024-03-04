import type { StoryObj, Meta } from '@storybook/web-components';
import { html } from 'lit';

import './show-case-basic-usage.js';

interface Args {
  items: { label: string; value: string; icon?: string }[];
  activeTab: string;
}

const meta = {
  title: 'General/Tabs',
  component: 'u-tabs',
  tags: ['autodocs'],
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const BasicUsage: Story = {
  render: () => {
    return html`<show-case-basic-usage></show-case-basic-usage>`;
  },
};
