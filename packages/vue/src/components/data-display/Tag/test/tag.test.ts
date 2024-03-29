import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import { UniTag } from "@/index";

test("tag default slot", () => {
  const wrapper = mount(UniTag, {
    slots: {
      default: "Tag",
    },
  });

  expect(wrapper.find("span").text()).toBe("Tag");
});

test("tag close event", () => {
  const wrapper = mount(UniTag, {
    slots: {
      default: "Tag",
    },
    props: {
      closable: true,
    },
  });

  wrapper.get("[data-test='close-icon']").trigger("click");
  expect(wrapper.emitted()).toHaveProperty("close");
});
