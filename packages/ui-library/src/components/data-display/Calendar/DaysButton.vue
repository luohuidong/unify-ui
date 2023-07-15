<script setup lang="ts">
withDefaults(
  defineProps<{
    displayText: string | number;
    isCurrentMonth?: boolean;
    isSelected?: boolean;
  }>(),
  {
    isCurrentMonth: false,
  }
);
</script>

<template>
  <button
    :class="[
      $style.day,
      { [$style['day__button--not-current-month']]: !isCurrentMonth, [$style['day__button--current']]: false },
    ]"
  >
    <time>
      {{ displayText }}
    </time>
  </button>
</template>

<style lang="scss" module>
@use "@/styles/color";
$border-color: #e5e7eb;

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

.day__button--not-current-month {
  color: color.$gray-400;
  background: color.$gray-50;
}

.day__button--current {
  color: color.$primary-font;
  font-weight: 600;
}

.day__button--selected {
}
</style>
