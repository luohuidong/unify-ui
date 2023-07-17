import { computed, type Ref } from "vue";

export function usePreviousMonthInfo(yearOfCurrentDate: Ref<number>, monthOfCurrentDate: Ref<number>) {
  const previousYear = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value - 1, 1).getFullYear());
  const previousMonth = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value - 1, 1).getMonth());
  const lastDateOfPreviousMonth = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value, 0).getDate()
  );

  return {
    previousYear,
    previousMonth,
    lastDateOfPreviousMonth,
  };
}
