import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import UniCalender from "../index.vue";

test("modelValue should be updated", async () => {
  const wrapper = mount(UniCalender, {
    props: {
      modelValue: new Date(2023, 6, 17),
      "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.find('[data-test="2023-7-19"]').trigger("click");
  expect(wrapper.props("modelValue")).toEqual(new Date(2023, 6, 19));

  await wrapper.find('[data-test="2023-8-1"]').trigger("click");
  expect(wrapper.props("modelValue")).toEqual(new Date(2023, 7, 1));
});
