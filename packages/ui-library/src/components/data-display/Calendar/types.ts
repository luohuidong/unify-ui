import type { Ref, ComputedRef } from "vue";

export interface Store {
  state: {
    selectedDate: Ref<Date>;

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
