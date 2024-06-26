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
const date = computed(() => new Date(props.year, props.month, props.date));

const disabled = computed(() => {
  if (!store.rootProps.disabledDate) return false;
  return store.rootProps.disabledDate(date.value);
});

const isToday = computed(() => {
  const today = new Date();
  return (
    props.year === today.getFullYear() &&
    props.month === today.getMonth() &&
    props.date === today.getDate()
  );
});

const isSelected = computed(() => {
  const selectedDate = store.rootProps.modelValue;

  if (!selectedDate) return false;

  return (
    props.year === selectedDate.getFullYear() &&
    props.month === selectedDate.getMonth() &&
    props.date === selectedDate.getDate()
  );
});

function handleClick() {
  if (disabled.value) {
    return;
  }

  store.rootEmit("update:modelValue", date.value);
  store.rootEmit("select", date.value);
  store.state.selectedYear.value = props.year;
  store.state.selectedMonth.value = props.month;
}
</script>

<template>
  <button
    :class="[
      $style.day,
      { [$style['day--not-current-month']]: !isCurrentMonth, [$style['day--disabled']]: disabled },
    ]"
    :data-testid="`${props.year}-${props.month + 1}-${props.date}`"
    @click="handleClick"
  >
    <time
      :datetime="`${props.year}-${props.month + 1}-${props.date}`"
      :data-test-selected="isSelected"
      :class="[
        $style['time'],
        {
          [$style['time--today']]: isToday,
          [$style['time--today-disabled']]: isToday && disabled,
          [$style['time--selected']]: isSelected,
          [$style['time--selected-disabled']]: isSelected && disabled,
        },
      ]"
    >
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

.day--not-current-month {
  color: color.$gray-400;
}

.day--disabled {
  cursor: not-allowed;
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

.time--today-disabled {
  font-weight: bold;
  color: color.$light;
  background: color.$gray-500;
}

.time--selected {
  font-weight: bold;
  color: color.$light;
  background: color.$primary;
}

.time--selected-disabled {
  font-weight: bold;
  color: color.$light;
  background: color.$primary-disabled;
}
</style>
