import type { StoryObj, Meta } from '@storybook/web-components';
import { html } from 'lit';
import '../index.js';
import './show-case-closable-tag.js';

interface Args {
  type: 'default' | 'success' | 'info' | 'warning' | 'error';
  closable: boolean;
}

const meta = {
  title: 'General/Tag',
  component: 'u-tag',
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['default', 'success', 'info', 'warning', 'error'],
      control: { type: 'radio' },
    },
    closable: { control: 'boolean' },
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const BasicUsage: Story = {
  args: {
    type: 'default',
    closable: false,
  },
  render: ({ type, closable }) => html` <u-tag type=${type} ?closable=${closable}> ${type} </u-tag> `,
};

export const Preset: Story = {
  render: () => html`
    <u-tag>default</u-tag>
    <u-tag type="success">success</u-tag>
    <u-tag type="info">info</u-tag>
    <u-tag type="warning">warning</u-tag>
    <u-tag type="error">error</u-tag>
  `,
};

export const Closable: Story = {
  render: () => html` <show-case-closable-tag></show-case-closable-tag> `,
};
