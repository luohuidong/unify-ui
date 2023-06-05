import { mount } from "@vue/test-utils";
import { h } from "vue";
import { test, expect } from "vitest";
import { UniEmpty, UniConfigProvider } from "unify-ui";

test("Internationalization", async () => {
  const wrapper = mount(UniConfigProvider, {
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.find("span").text()).toBe("No Data");

  await wrapper.setProps({
    locale: "zh-CN",
  });

  expect(wrapper.find("span").text()).toBe("暂无数据");
});
