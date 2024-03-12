import { computed, type Ref } from "vue";

export function useNextMonthInfo(selectedYear: Ref<number>, selectedMonth: Ref<number>) {
  const nextYear = computed(() =>
    new Date(selectedYear.value, selectedMonth.value + 1, 1).getFullYear()
  );
  const nextMonth = computed(() =>
    new Date(selectedYear.value, selectedMonth.value + 1, 1).getMonth()
  );

  return {
    nextYear,
    nextMonth,
  };
}
