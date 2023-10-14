import type { Ref } from "vue";

export type OptionValue = string | number;
export type ModelValueSingle = OptionValue | undefined;
export type ModelValueMultiple = Set<OptionValue> | undefined;
export type ModelValue = ModelValueSingle | ModelValueMultiple;

export interface SelectProps {
  modelValue: ModelValue;
  placeholder?: string;
  localSearch?: boolean;
  loading?: boolean;
  remoteSearch?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  status?: "error";
}

export interface SelectEmits {
  (e: "update:modelValue", modelValue: ModelValue): void;
  (e: "change", modelValue: ModelValue): void;
  (e: "search", searchBoxInputValue: string): void;
}

export interface Store {
  rootProps: SelectProps;
  rootEmits: SelectEmits;
  triggerRef: Ref<HTMLSpanElement | undefined>;
  optionsRef: Ref<HTMLUListElement | undefined>;
  state: {
    valueLabelMap: Map<OptionValue, string>;
    popupVisible: boolean;
    floatingElementWidth: number;
    searchInputValue: string;
    isErrorStatus: boolean;
  };
  actions: {
    handleClear: () => void;
    visibleChange: () => void;
  };
}
