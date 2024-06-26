import type { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit";
import "./index";

interface Args {
  type: "secondary" | "primary" | "soft";
  size: "xs" | "s" | "m" | "l" | "xl";
  rounded: boolean;
  htmlType: "button" | "submit" | "reset";
  disabled: boolean;
}

const meta = {
  title: "General/Button",
  component: "u-button",
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["soft", "secondary", "primary"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "s", "m", "l", "xl", "m"],
      control: { type: "radio" },
    },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
    htmlType: {
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const BasicUsage: Story = {
  args: {
    type: "soft",
    size: "m",
    rounded: false,
    disabled: false,
    htmlType: "button",
  },
  render: ({ type, size, rounded, disabled, htmlType }) => html`
    <u-button
      type=${type}
      size=${size}
      ?rounded=${rounded}
      ?disabled=${disabled}
      htmlType=${htmlType}
    >
      Button
    </u-button>
  `,
};

export const Type: Story = {
  args: {
    type: "primary",
  },
  render: () => html`
    <u-button type="soft"> Soft </u-button>
    <u-button type="primary"> Primary </u-button>
    <u-button type="secondary"> Secondary </u-button>
  `,
};

export const ButtonSize: Story = {
  args: {
    size: "m",
  },
  render: () => html`
    <u-button size="xs">XS</u-button>
    <u-button size="s">S</u-button>
    <u-button size="m">M</u-button>
    <u-button size="l">L</u-button>
    <u-button size="xl">XL</u-button>
  `,
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: () => html`
    <u-button type="soft" rounded> Soft </u-button>
    <u-button type="primary" rounded> Primary </u-button>
    <u-button type="secondary" rounded> Secondary </u-button>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => html`
    <u-button disabled> Disabled</u-button>
    <u-button disabled rounded> Disabled</u-button>
  `,
};
