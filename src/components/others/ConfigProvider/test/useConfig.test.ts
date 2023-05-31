import { mount } from "@vue/test-utils";
import { h } from "vue";
import { UniConfigProvider, UniEmpty } from "unify-ui";

test("ConfigProvider default locale:en-US. Expect en-US.", () => {
  const wrapper = mount(UniConfigProvider, {
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.text()).toContain("No Data");
});

test("ConfigProvider pass locale:HK, default fallbackLocale: en-US. Expect en-US", () => {
  const wrapper = mount(UniConfigProvider, {
    props: {
      locale: "zh-HK",
    },
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.text()).toContain("No Data");
});

test("ConfigProvider pass locale:zh-CN. Expect zh-CN", () => {
  const wrapper = mount(UniConfigProvider, {
    props: {
      locale: "zh-CN",
    },
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.text()).toContain("暂无数据");
});

test("ConfigProvider pass locale:en and fallbackLocale:zh-CN. Expect zh-CN", () => {
  const wrapper = mount(UniConfigProvider, {
    props: {
      locale: "en",
      fallbackLocale: "zh-CN",
    },
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.text()).toContain("暂无数据");
});

// ConfigProvide pass locale:zh-CN and fallbackLocale:en-US

test("ConfigProvider pass locale:zh-CN and fallbackLocale:en-US. Expect zh-CN", () => {
  const wrapper = mount(UniConfigProvider, {
    props: {
      locale: "zh-CN",
      fallbackLocale: "en-US",
    },
    slots: {
      default: () => h(UniEmpty),
    },
  });

  expect(wrapper.text()).toContain("暂无数据");
});
