import { ref, provide, inject, reactive } from "vue";
import type { Ref, InjectionKey } from "vue";
import type { SelectProps, SelectEmits, Value } from "../types";

interface Store {
  rootProps: SelectProps;
  rootEmits: SelectEmits;
  triggerRef: Ref<HTMLSpanElement | undefined>;
  state: {
    valueLabelMap: Map<Value, string>;
    popupVisible: boolean;
    floatingElementWidth: number;
  };
  actions: {
    handleClear: () => void;
    visibleChange: () => void;
  };
}

const injectKey = Symbol("selectInjectKey") as InjectionKey<Store>;

export function useProvideStore(rootProps: SelectProps, rootEmits: SelectEmits) {
  const triggerRef = ref<HTMLSpanElement>();

  const state: Store["state"] = reactive({
    popupVisible: false,
    floatingElementWidth: 250,
    valueLabelMap: new Map(),
  });

  function handleClear() {
    rootEmits("update:modelValue", undefined);
    rootEmits("change", undefined);
  }

  function visibleChange() {
    state.popupVisible = !state.popupVisible;
  }

  const store: Store = {
    triggerRef,
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
