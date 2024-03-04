import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Checkbox from "../UniCheckbox.vue";

test("Checkbox: label", () => {
  const wrapper = mount(Checkbox, {
    props: {
      label: "Checkbox label",
    },
  });

  expect(wrapper.text()).toContain("Checkbox label");
});
