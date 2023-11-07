import { ref, provide, inject, reactive, computed } from "vue";
import type { InjectionKey } from "vue";
import type { SelectProps, SelectEmits, Store, OptionValue, ModelValueMultiple } from "../types";
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

  function changeMultipleModeModelValue(params: { value: OptionValue; add: boolean }) {
    let tmp: Set<OptionValue> | undefined = new Set(rootProps.modelValue as ModelValueMultiple);

    const { value, add } = params;
    if (add) {
      tmp.add(value);
    } else {
      tmp.delete(value);
      if (tmp.size === 0) {
        tmp = undefined;
      }
    }

    rootEmits("update:modelValue", tmp);
    rootEmits("change", tmp);
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
      changeMultipleModeModelValue,
    },
  };

  provide(injectKey, store);
  return store;
}

export function useStore() {
  return inject(injectKey) as Store;
}
