import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { UniConfigProvider } from "unify-ui";

import { useI18n } from "../useI18n";

test("use useI18n with ConfigProvider", async () => {
  const TestComponent = defineComponent({
    setup() {
      const { t } = useI18n();
      return {
        t,
      };
    },
    template: `<div>{{ t('empty.no_data') }}</div>`,
  });

  const wrapper = mount(UniConfigProvider, {
    slots: {
      default: () => h(TestComponent),
    },
  });

  // default locale: en-US
  expect(wrapper.html()).toBe(`<div>No Data</div>`);

  // locale: zh-CN
  await wrapper.setProps({
    locale: "zh-CN",
  });
  expect(wrapper.html()).toBe(`<div>暂无数据</div>`);

  // locale: zh-HK, fallbackLocale: en-US
  await wrapper.setProps({
    locale: "zh-HK",
  });
  expect(wrapper.html()).toBe(`<div>No Data</div>`);

  // locale: zh-HK, fallbackLocale: zh-CN
  await wrapper.setProps({
    locale: "zh-HK",
    fallbackLocale: "zh-CN",
  });
  expect(wrapper.html()).toBe(`<div>暂无数据</div>`);
});

test("use useI18n without ConfigProvider", async () => {
  const TestComponent = defineComponent({
    setup() {
      const { t } = useI18n();
      return {
        t,
      };
    },
    template: `<div>{{ t('empty.no_data') }}</div>`,
  });

  const wrapper = mount(TestComponent);
  expect(wrapper.html()).toBe(`<div>No Data</div>`);
});
