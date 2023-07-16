import type { Ref, ComputedRef } from "vue";

export interface RootProps {
  readonly modelValue: Date | null | undefined;
}

export interface RootEmit {
  (e: "update:modelValue", value: Date): void;
}

export interface Store {
  rootProps: RootProps;

  rootEmit: RootEmit;

  state: {
    yearOfCurrentDate: Ref<number>;
    monthOfCurrentDate: Ref<number>;
    lastDateOfCurrentMonth: ComputedRef<number>;
    dayOfCurrentMonthFirstDate: ComputedRef<number>;

    previousYear: ComputedRef<number>;
    previousMonth: ComputedRef<number>;
    lastDateOfPreviousMonth: ComputedRef<number>;
    dayOfCurrentMonthLastDate: ComputedRef<number>;

    nextYear: ComputedRef<number>;
    nextMonth: ComputedRef<number>;
  };
  actions: {
    handleChangeToPreviousMonth: () => void;
    handleChangeToNextMonth: () => void;
  };
}
