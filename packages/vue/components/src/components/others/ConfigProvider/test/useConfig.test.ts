import { mount } from "@vue/test-utils";
import { h, defineComponent } from "vue";
import { test, expect } from "vitest";
import { UniConfigProvider } from "@/index";

import { useConfig } from "../utils";

test("locale and fallbackLocale", async () => {
  const TestComponent = defineComponent({
    setup() {
      const config = useConfig();
      return { config };
    },
    template: `
      <div>
        <span id="locale">{{ config.locale }}</span>
        <span id="fallbackLocale">{{ config.fallbackLocale }}</span>
      </div>
    `,
  });

  // default locale:en-US. Expect en-US.
  const wrapper = mount(UniConfigProvider, {
    slots: {
      default: () => h(TestComponent),
    },
  });

  const locale = wrapper.find("#locale");
  const fallbackLocale = wrapper.find("#fallbackLocale");

  // default locale:en-Us, default fallbackLocale:en-US
  expect(locale.text()).toContain("en-US");
  expect(fallbackLocale.text()).toContain("en-US");

  // pass locale:zh-CN,  fallbackLocale: zh-HK
  await wrapper.setProps({
    locale: "zh-CN",
    fallbackLocale: "zh-HK",
  });
  expect(locale.text()).toContain("zh-CN");
  expect(fallbackLocale.text()).toContain("zh-HK");
});
