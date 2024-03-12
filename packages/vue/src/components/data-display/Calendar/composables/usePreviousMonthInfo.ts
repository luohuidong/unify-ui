import { computed, type Ref } from "vue";

export function usePreviousMonthInfo(selectedYear: Ref<number>, selectedMonth: Ref<number>) {
  const previousYear = computed(() =>
    new Date(selectedYear.value, selectedMonth.value - 1, 1).getFullYear()
  );
  const previousMonth = computed(() =>
    new Date(selectedYear.value, selectedMonth.value - 1, 1).getMonth()
  );
  const lastDateOfPreviousMonth = computed(() =>
    new Date(selectedYear.value, selectedMonth.value, 0).getDate()
  );

  return {
    previousYear,
    previousMonth,
    lastDateOfPreviousMonth,
  };
}
