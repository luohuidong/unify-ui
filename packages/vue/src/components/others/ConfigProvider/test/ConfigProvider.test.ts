import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import { h, defineComponent, inject } from "vue";
import { UniConfigProvider } from "@/components";
import { configKey } from "../utils";

test("locale and fallbackLocale", async () => {
  const TestComponent = defineComponent({
    setup() {
      const config = inject(configKey);
      return { config };
    },
    template: `
      <div>
        <span id="locale">{{ config.locale }}</span>
        <span id="fallbackLocale">{{ config.fallbackLocale }}</span>
      </div>
    `,
  });

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

  // locale: zh-CN, fallbackLocale: zh-CN
  await wrapper.setProps({ locale: "zh-CN", fallbackLocale: "zh-CN" });
  expect(locale.text()).toContain("zh-CN");
  expect(fallbackLocale.text()).toContain("zh-CN");
});
