import { ref, provide, inject, reactive, computed } from "vue";
import type { InjectionKey } from "vue";
import type { SelectProps, SelectEmits, Store } from "../types";
import { useGetFormItemValidateStatus } from "@/components";

const injectKey = Symbol("selectInjectKey") as InjectionKey<Store>;

export function useProvideStore(rootProps: SelectProps, rootEmits: SelectEmits) {
  const triggerRef = ref<HTMLSpanElement>();
  const optionsRef = ref<HTMLUListElement>();

  const isErrorStatus = computed(() => rootProps.status === "error" || validateStatus?.value === "error");

  const state: Store["state"] = reactive({
    popupVisible: false,
    floatingElementWidth: 250,
    valueLabelMap: new Map(),
    searchInputValue: "",
    isErrorStatus,
  });

  const validateStatus = useGetFormItemValidateStatus();

  function handleClear() {
    rootEmits("update:modelValue", undefined);
    rootEmits("change", undefined);
  }

  function visibleChange() {
    state.popupVisible = !state.popupVisible;
  }

  const store: Store = {
    triggerRef,
    optionsRef,
    rootProps,
    rootEmits,
    state,
    actions: {
      handleClear,
      visibleChange,
    },
  };

  provide(injectKey, store);
  return store;
}

export function useStore() {
  return inject(injectKey) as Store;
}
