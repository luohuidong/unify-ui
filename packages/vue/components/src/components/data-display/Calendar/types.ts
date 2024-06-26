import type { Ref } from "vue";

export interface RootProps {
  readonly modelValue: Date | null | undefined;
  readonly disabledDate?: (date: Date) => boolean;
}

export interface RootEmit {
  (e: "update:modelValue", value: Date): void;
  (e: "select", value: Date): void;
}

export interface Store {
  rootProps: RootProps;
  rootEmit: RootEmit;
  state: {
    selectedYear: Ref<number>;
    selectedMonth: Ref<number>;
    displayYearOptions: Ref<boolean>;
    displayMonthOptions: Ref<boolean>;
  };
  actions: {
    handleChangeToPreviousMonth: () => void;
    handleChangeToNextMonth: () => void;
  };
}
