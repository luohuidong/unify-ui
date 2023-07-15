<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePickerCalendar",
});
</script>

<script setup lang="ts">
import { useStore } from "./composables";
import DaysButton from "./DaysButton.vue";

const store = useStore();
const { dayOfCurrentMonthFirstDate, lastDateOfCurrentMonth, lastDateOfPreviousMonth, dayOfCurrentMonthLastDate } =
  store.state;
</script>

<template>
  <div :class="$style.days">
    <DaysButton
      v-for="i of dayOfCurrentMonthFirstDate"
      :key="i"
      :display-text="lastDateOfPreviousMonth - (dayOfCurrentMonthFirstDate - i)"
    />

    <DaysButton v-for="i of lastDateOfCurrentMonth" :key="i" :display-text="i" is-current-month> </DaysButton>

    <DaysButton v-for="i of 6 - dayOfCurrentMonthLastDate" :key="i" :display-text="i" />
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";
$border-color: #e5e7eb;

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1px;

  overflow: hidden;
  border-radius: 5px;
  border: 1px solid $border-color;
}

.day {
  height: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  outline: 1px solid $border-color;
  background: none;

  &:hover {
    background: color.$gray-100;
  }
}

.day__button--current {
  color: color.$primary-font;
  font-weight: 600;
}

.day__button--not-current-month {
  color: color.$gray-400;
  background: color.$gray-50;
}

.day__button-selected {
}
</style>
