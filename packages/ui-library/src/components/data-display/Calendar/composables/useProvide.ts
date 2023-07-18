import { ref, provide } from "vue";

import { storeKeys } from "../injectKeys";
import { RootProps, RootEmit } from "../types";

export function useProvide(rootProps: RootProps, rootEmit: RootEmit) {
  const selectedYear = ref(rootProps.modelValue ? rootProps.modelValue.getFullYear() : new Date().getFullYear());
  const selectedMonth = ref(rootProps.modelValue ? rootProps.modelValue.getMonth() : new Date().getMonth());
  const displayYearOptions = ref(false);
  const displayMonthOptions = ref(false);

  function handleChangeToPreviousMonth() {
    if (selectedMonth.value === 0) {
      selectedYear.value--;
      selectedMonth.value = 11;
    } else {
      selectedMonth.value--;
    }
  }

  function handleChangeToNextMonth() {
    if (selectedMonth.value === 11) {
      selectedYear.value++;
      selectedMonth.value = 0;
    } else {
      selectedMonth.value++;
    }
  }

  provide(storeKeys, {
    rootProps,
    rootEmit,

    state: {
      selectedYear,
      selectedMonth,
      displayYearOptions,
      displayMonthOptions,
    },

    actions: {
      handleChangeToPreviousMonth,
      handleChangeToNextMonth,
    },
  });
}
