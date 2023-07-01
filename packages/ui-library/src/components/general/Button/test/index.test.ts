import { mount } from "@vue/test-utils";

import UniButton from "../index.vue";
import { expect, test } from "vitest";

test("button basic usage", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  expect(wrapper.html()).toContain("Hello World");
});

test("button event click", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  wrapper.trigger("click");
  expect(wrapper.emitted()).toHaveProperty("click");
});

test("button disabled", () => {
  const wrapper = mount(UniButton, {
    props: {
      disabled: true,
    },
  });

  wrapper.trigger("click");
  expect(wrapper.emitted()).not.toHaveProperty("click");
  expect(wrapper.classes()).toContain("button--disabled");
});
