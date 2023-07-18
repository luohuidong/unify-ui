import { ref, provide } from "vue";

import { storeKeys } from "../injectKeys";
import { RootProps, RootEmit } from "../types";

export function useProvide(rootProps: RootProps, rootEmit: RootEmit) {
  const yearOfCurrentDate = ref(rootProps.modelValue ? rootProps.modelValue.getFullYear() : new Date().getFullYear());
  const monthOfCurrentDate = ref(rootProps.modelValue ? rootProps.modelValue.getMonth() : new Date().getMonth());
  const displayYearOptions = ref(false);
  const displayMonthOptions = ref(false);

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
    rootProps,
    rootEmit,

    state: {
      yearOfCurrentDate,
      monthOfCurrentDate,
      displayYearOptions,
      displayMonthOptions,
    },

    actions: {
      handleChangeToPreviousMonth,
      handleChangeToNextMonth,
    },
  });
}
