import { provide, inject, computed } from "vue";
import type { InjectionKey, ComputedRef } from "vue";

import type { FormItemInfo, ValidateStatus } from "../types";

export const formItemValidateStateKey: InjectionKey<ComputedRef<ValidateStatus>> = Symbol("formItemValidateState");

export function useProviceFormItemValidateStatus(formItemInfo: ComputedRef<FormItemInfo | undefined>) {
  const state = computed(() => formItemInfo.value?.validateStatus);

  provide(formItemValidateStateKey, state);
}

export function useGetFormItemValidateStatus() {
  return inject(formItemValidateStateKey, undefined);
}
