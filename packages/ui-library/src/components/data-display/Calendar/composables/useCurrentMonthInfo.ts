import { computed, type Ref } from "vue";

export function useCurrentMonthInfo(yearOfCurrentDate: Ref<number>, monthOfCurrentDate: Ref<number>) {
  const lastDateOfCurrentMonth = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 0).getDate()
  );
  const dayOfCurrentMonthFirstDate = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value, 1).getDay()
  );
  const dayOfCurrentMonthLastDate = computed(() =>
    new Date(yearOfCurrentDate.value, monthOfCurrentDate.value + 1, 0).getDay()
  );

  return {
    lastDateOfCurrentMonth,
    dayOfCurrentMonthFirstDate,
    dayOfCurrentMonthLastDate,
  };
}
