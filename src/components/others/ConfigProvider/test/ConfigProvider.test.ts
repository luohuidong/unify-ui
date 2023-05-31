import { mount } from "@vue/test-utils";
import { UniConfigProvider, UniEmpty } from "unify-ui";
import { h } from "vue";

test("Internationalization", async () => {
  const wrapper = mount(UniConfigProvider, {
    props: {
      locale: "en-US",
    },
    slots: {
      default: h(UniEmpty),
    },
  });
  expect(wrapper.html()).toContain("No Data");

  await wrapper.setProps({ locale: "zh-CN" });
  expect(wrapper.html()).toContain("暂无数据");
});
