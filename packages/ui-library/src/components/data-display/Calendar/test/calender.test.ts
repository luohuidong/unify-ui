import { ref } from "vue";
import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import UniCalender from "../index.vue";
import { useCurrentMonthInfo, useNextMonthInfo, usePreviousMonthInfo } from "../composables";

test("modelValue should be updated", async () => {
  const wrapper = mount(UniCalender, {
    props: {
      modelValue: new Date(2023, 6, 17),
      "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.find('button[data-testid="2023-7-19"]').trigger("click");
  expect(wrapper.props("modelValue")).toEqual(new Date(2023, 6, 19));

  await wrapper.find('button[data-testid="2023-8-1"]').trigger("click");
  expect(wrapper.props("modelValue")).toEqual(new Date(2023, 7, 1));

  await wrapper.setProps({ modelValue: new Date(2023, 7, 2) });
  expect(wrapper.find('time[datetime="2023-8-1"]').attributes("data-test-selected")).toContain("false");
  expect(wrapper.find('time[datetime="2023-8-2"]').attributes("data-test-selected")).toContain("true");
});

test("useCurrentMonthInfo, current date: 2023-07", () => {
  const { dayOfCurrentMonthFirstDate, dayOfCurrentMonthLastDate, lastDateOfCurrentMonth } = useCurrentMonthInfo(
    ref(2023),
    ref(6)
  );

  expect(dayOfCurrentMonthFirstDate.value).toEqual(6);
  expect(dayOfCurrentMonthLastDate.value).toEqual(1);
  expect(lastDateOfCurrentMonth.value).toEqual(31);
});

test("useNextMonthInfo, current date: 2023-07", () => {
  const { nextYear, nextMonth } = useNextMonthInfo(ref(2023), ref(6));

  expect(nextYear.value).toEqual(2023);
  expect(nextMonth.value).toEqual(7);
});

test("useNextMonthInfo, current date: 2023-12", () => {
  const { nextYear, nextMonth } = useNextMonthInfo(ref(2023), ref(11));

  expect(nextYear.value).toEqual(2024);
  expect(nextMonth.value).toEqual(0);
});

test("usePreviousMonthInfo, current date: 2023-07", () => {
  const { previousYear, previousMonth } = usePreviousMonthInfo(ref(2023), ref(6));

  expect(previousYear.value).toEqual(2023);
  expect(previousMonth.value).toEqual(5);
});

test("usePreviousMonthInfo, current date: 2024-01", () => {
  const { previousYear, previousMonth } = usePreviousMonthInfo(ref(2024), ref(0));

  expect(previousYear.value).toEqual(2023);
  expect(previousMonth.value).toEqual(11);
});
