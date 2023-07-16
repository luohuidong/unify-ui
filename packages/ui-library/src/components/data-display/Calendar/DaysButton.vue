<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "./composables";

const props = withDefaults(
  defineProps<{
    displayText: string | number;
    isCurrentMonth?: boolean;
    isSelected?: boolean;
    year: number;
    month: number;
    date: number;
  }>(),
  {
    isCurrentMonth: false,
  }
);

const store = useStore();

const isToday = computed(() => {
  const today = new Date();
  return props.year === today.getFullYear() && props.month === today.getMonth() && props.date === today.getDate();
});

const isSelected = computed(() => {
  const selectedDate = store.state.selectedDate.value;
  return (
    props.year === selectedDate.getFullYear() &&
    props.month === selectedDate.getMonth() &&
    props.date === selectedDate.getDate()
  );
});

function handleClick() {
  store.state.selectedDate.value = new Date(props.year, props.month, props.date);
  store.state.yearOfCurrentDate.value = props.year;
  store.state.monthOfCurrentDate.value = props.month;
}
</script>

<template>
  <button :class="[$style.day, { [$style['day__button--not-current-month']]: !isCurrentMonth }]" @click="handleClick">
    <time :class="[$style['time'], { [$style['time--today']]: isToday, [$style['time--selected']]: isSelected }]">
      {{ displayText }}
    </time>
  </button>
</template>

<style lang="scss" module>
@use "@/styles/color";
$border-color: #e5e7eb;

%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.day {
  @extend %flex-center;

  height: 50px;
  width: 100%;

  cursor: pointer;
  border: none;
  outline: 1px solid $border-color;
  background: none;

  &:hover {
    background: color.$gray-100;
  }
}

.day__button--not-current-month {
  color: color.$gray-400;
  background: color.$gray-50;
}

.time {
  @extend %flex-center;

  height: 30px;
  width: 30px;

  border-radius: 50%;
  user-select: none;
}

.time--today {
  font-weight: bold;
  color: color.$light;
  background: color.$dark;
}

.time--selected {
  font-weight: bold;
  color: color.$light;
  background: color.$primary;
}
</style>
