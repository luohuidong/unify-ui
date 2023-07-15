import { ref, computed, provide } from "vue";

import { storeKeys } from "../injectKeys";

export function useProvide() {
  const selectedDate = ref(new Date());

  const yearOfCurrentDate = ref(new Date().getFullYear());
  const monthOfCurrentDate = ref(new Date().getMonth());
  const dateOfCurrentDate = new Date().getDate();
  const lastDateOfCurrentMonth = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 0).getDate()
  );
  const dayOfCurrentMonthFirstDate = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value, 1).getDay()
  );
  const dayOfCurrentMonthLastDate = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 0).getDay()
  );

  const previousYear = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value - 1, 1).getFullYear());
  const previousMonth = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value - 1, 1).getMonth());
  const lastDateOfPreviousMonth = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value, 0).getDate()
  );

  const nextYear = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 1).getFullYear());
  const nextMonth = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 1).getMonth());

  function handleChangeToPreviousMonth() {
    if (monthOfCurrentDate.value === 0) {
      yearOfCurrentDate.value--;
      monthOfCurrentDate.value = 11;
    } else {
      monthOfCurrentDate.value--;
    }
  }

  function handleChangeToNextMonth() {
    if (monthOfCurrentDate.value === 11) {
      yearOfCurrentDate.value++;
      monthOfCurrentDate.value = 0;
    } else {
      monthOfCurrentDate.value++;
    }
  }

  provide(storeKeys, {
    state: {
      selectedDate,

      yearOfCurrentDate,
      monthOfCurrentDate,
      lastDateOfCurrentMonth,
      dayOfCurrentMonthFirstDate,

      previousYear,
      previousMonth,
      lastDateOfPreviousMonth,
      dayOfCurrentMonthLastDate,

      nextYear,
      nextMonth,
    },
    actions: {
      handleChangeToPreviousMonth,
      handleChangeToNextMonth,
    },
  });
}
