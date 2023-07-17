<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePickerCalendar",
});
</script>

<script setup lang="ts">
import { computed } from "vue";

import { useStore, useCurrentMonthInfo, useNextMonthInfo, usePreviousMonthInfo } from "./composables";
import DaysButton from "./DaysButton.vue";

const store = useStore();
const { yearOfCurrentDate, monthOfCurrentDate } = store.state;
const { dayOfCurrentMonthFirstDate, lastDateOfCurrentMonth } = useCurrentMonthInfo(
  yearOfCurrentDate,
  monthOfCurrentDate
);
const { previousYear, previousMonth, lastDateOfPreviousMonth } = usePreviousMonthInfo(
  yearOfCurrentDate,
  monthOfCurrentDate
);
const { nextYear, nextMonth } = useNextMonthInfo(yearOfCurrentDate, monthOfCurrentDate);

function getPreviousDate(index: number) {
  return lastDateOfPreviousMonth.value - (dayOfCurrentMonthFirstDate.value - index);
}

const totalNextMonthDates = computed(() => 6 * 7 - (dayOfCurrentMonthFirstDate.value + lastDateOfCurrentMonth.value));
</script>

<template>
  <div :class="$style.days">
    <DaysButton
      v-for="i of dayOfCurrentMonthFirstDate"
      :key="i"
      :display-text="getPreviousDate(i)"
      :year="previousYear"
      :month="previousMonth"
      :date="getPreviousDate(i)"
    />

    <DaysButton
      v-for="i of lastDateOfCurrentMonth"
      :key="i"
      :display-text="i"
      is-current-month
      :year="yearOfCurrentDate"
      :month="monthOfCurrentDate"
      :date="i"
    >
    </DaysButton>

    <DaysButton
      v-for="i of totalNextMonthDates"
      :key="i"
      :display-text="i"
      :year="nextYear"
      :month="nextMonth"
      :date="i"
    />
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";
$border-color: #e5e7eb;

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-items: center;
  align-items: center;
  gap: 1px;

  overflow: hidden;
  border-radius: 5px;
  border: 1px solid $border-color;
}
</style>
