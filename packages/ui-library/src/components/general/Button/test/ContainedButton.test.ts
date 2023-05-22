import { mount } from "@vue/test-utils";

import UniButton from "../index.vue";

test("button basic usage", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  expect(wrapper.html()).toContain("Hello World");
});

test("button click event", () => {
  const wrapper = mount(UniButton, {
    slots: {
      default: "Hello World",
    },
  });

  wrapper.trigger("click");

  expect(wrapper.emitted()).toHaveProperty("click");
});
