import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { UniInput } from "@/components";

test("input modelValue", async () => {
  const wrapper = mount(UniInput, {
    props: {
      modelValue: "initialText",
      "onUpdate:modelValue": (val: string) => wrapper.setProps({ modelValue: val }),
    },
  });

  await wrapper.find("input").setValue("newText");
  expect(wrapper.props("modelValue")).toBe("newText");
});

test("input disabled", async () => {
  const wrapper = mount(UniInput, {
    props: {
      disabled: true,
      modelValue: "initialText",
      "onUpdate:modelValue": (val: string) => wrapper.setProps({ modelValue: val }),
    },
  });

  await wrapper.find("input").setValue("newText");
  expect(wrapper.props("modelValue")).toBe("initialText");
});

test("input placeholder", async () => {
  const wrapper = mount(UniInput, {
    props: {
      placeholder: "placeholder",
    },
  });

  expect(wrapper.find("input").attributes("placeholder")).toBe("placeholder");
});

test("input type password", async () => {
  const wrapper = mount(UniInput, {
    props: {
      type: "password",
    },
  });

  expect(wrapper.find("input").attributes("type")).toBe("password");
});
