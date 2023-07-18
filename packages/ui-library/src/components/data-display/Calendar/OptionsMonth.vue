<script setup lang="ts">
import { ref } from "vue";

import { useStore } from "./composables";
import { BaseHeader } from "./components";

const store = useStore();
const { displayMonthOptions, monthOfCurrentDate } = store.state;

const months: { text: string; value: number }[] = [
  {
    text: "January",
    value: 0,
  },
  {
    text: "February",
    value: 1,
  },
  {
    text: "March",
    value: 2,
  },
  {
    text: "April",
    value: 3,
  },
  {
    text: "May",
    value: 4,
  },
  {
    text: "June",
    value: 5,
  },
  {
    text: "July",
    value: 6,
  },
  {
    text: "August",
    value: 7,
  },
  {
    text: "September",
    value: 8,
  },
  {
    text: "October",
    value: 9,
  },
  {
    text: "November",
    value: 10,
  },
  {
    text: "December",
    value: 11,
  },
];

function handleMonthClick(month: number) {
  monthOfCurrentDate.value = month;
  displayMonthOptions.value = false;
}
</script>

<template>
  <div v-if="displayMonthOptions" :class="$style.container">
    <div>
      <BaseHeader :arrows="[]"> January - December </BaseHeader>
    </div>

    <div :class="$style.months">
      <button v-for="month in months" :key="month.value" :class="$style.month" @click="handleMonthClick(month.value)">
        {{ month.text }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
@use "@/styles/color";

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 20px;

  display: flex;
  flex-direction: column;

  background: #fff;
}

.months {
  flex: 1;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}

.month {
  height: 30px;
  width: 90px;

  padding: 0;

  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background: color.$gray-100;
  }
}
</style>
