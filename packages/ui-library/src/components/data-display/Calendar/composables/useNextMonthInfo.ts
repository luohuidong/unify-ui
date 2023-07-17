import { computed, type Ref } from "vue";

export function useNextMonthInfo(yearOfCurrentDate: Ref<number>, monthOfCurrentDate: Ref<number>) {
  const nextYear = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 1).getFullYear());
  const nextMonth = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 1).getMonth());

  return {
    nextYear,
    nextMonth,
  };
}
