import type { StoryObj, Meta } from '@storybook/web-components';
import { html } from 'lit';

import './basic-usage.js';

interface Args {
  total: number;
  pageSize: number;
  current: number;
}

const meta = {
  title: 'Navigation/Pagination',
  component: 'u-pagination',
  tags: ['autodocs'],
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const BasicUsage: Story = {
  render: () => html`<show-case-pagination-basic-usage></show-case-pagination-basic-usage>`,
};
