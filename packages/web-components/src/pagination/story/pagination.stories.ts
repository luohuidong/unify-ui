import type { StoryObj, Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../index.js';

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
  args: {
    total: 100,
    pageSize: 20,
    current: 1,
  },
  render: ({ total, pageSize, current }) => html`<u-pagination> </u-pagination>`,
};
