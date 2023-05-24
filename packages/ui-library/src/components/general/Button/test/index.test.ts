import { mount } from "@vue/test-utils";

import UniButton from "../index.vue";
import { expect } from "vitest";

test("button basic usage", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  expect(wrapper.html()).toContain("Hello World");
  expect(wrapper.classes()).toContain("button--type-secondary");
  expect(wrapper.classes()).toContain("button--size-m");
});

test("button event event", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  wrapper.trigger("click");

  expect(wrapper.emitted()).toHaveProperty("click");
});

test("button type secondary ", () => {
  const wrapper = mount(UniButton, {
    props: {
      type: "secondary",
    },
  });

  expect(wrapper.classes()).toContain("button--type-secondary");
});

test("button type primary ", () => {
  const wrapper = mount(UniButton, {
    props: {
      type: "primary",
    },
  });

  expect(wrapper.classes()).toContain("button--type-primary");
});

test("button type soft ", () => {
  const wrapper = mount(UniButton, {
    props: {
      type: "soft",
    },
  });

  expect(wrapper.classes()).toContain("button--type-soft");
});

test("button size super small", () => {
  const wrapper = mount(UniButton, {
    props: {
      size: "xs",
    },
  });

  expect(wrapper.classes()).toContain("button--size-xs");
});

test("button size small ", () => {
  const wrapper = mount(UniButton, {
    props: {
      size: "s",
    },
  });

  expect(wrapper.classes()).toContain("button--size-s");
});

test("button size medium ", () => {
  const wrapper = mount(UniButton, {
    props: {
      size: "m",
    },
  });

  expect(wrapper.classes()).toContain("button--size-m");
});

test("button size large", () => {
  const wrapper = mount(UniButton, {
    props: {
      size: "l",
    },
  });

  expect(wrapper.classes()).toContain("button--size-l");
});

test("button size super large", () => {
  const wrapper = mount(UniButton, {
    props: {
      size: "xl",
    },
  });

  expect(wrapper.classes()).toContain("button--size-xl");
});

test("button rounded", () => {
  const wrapper = mount(UniButton, {
    props: {
      rounded: true,
    },
  });

  expect(wrapper.classes()).toContain("button--rounded");
});
