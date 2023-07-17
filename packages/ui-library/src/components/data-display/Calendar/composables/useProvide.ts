import { ref, computed, provide } from "vue";

import { storeKeys } from "../injectKeys";
import { RootProps, RootEmit } from "../types";

export function useProvide(rootProps: RootProps, rootEmit: RootEmit) {
  const yearOfCurrentDate = ref(new Date().getFullYear());
  const monthOfCurrentDate = ref(new Date().getMonth());

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
    },

    actions: {
      handleChangeToPreviousMonth,
      handleChangeToNextMonth,
    },
  });
}
