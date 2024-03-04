import { computed, type Ref } from "vue";

export function useCurrentMonthInfo(selectedYear: Ref<number>, selectedMonth: Ref<number>) {
  const lastDateOfCurrentMonth = computed(() => new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate());
  const dayOfCurrentMonthFirstDate = computed(() => new Date(selectedYear.value, selectedMonth.value, 1).getDay());
  const dayOfCurrentMonthLastDate = computed(() => new Date(selectedYear.value, selectedMonth.value + 1, 0).getDay());

  return {
    lastDateOfCurrentMonth,
    dayOfCurrentMonthFirstDate,
    dayOfCurrentMonthLastDate,
  };
}
