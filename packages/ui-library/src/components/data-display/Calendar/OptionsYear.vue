<script setup lang="ts">
import { computed, ref } from "vue";

import { useStore } from "./composables";
import { BaseHeader } from "./components";

const store = useStore();
const { displayYearOptions, selectedYear } = store.state;

const interval = ref(0);

const years = computed(() => {
  const tmpYears = [];

  for (let i = 0; i < 10; i++) {
    tmpYears.push(Math.floor(selectedYear.value / 10) * 10 + interval.value + i);
  }

  return tmpYears;
});

const displayHeaderText = computed(() => {
  const startYear = Math.floor(selectedYear.value / 10) * 10 + interval.value;
  const endYear = startYear + 9;

  return `${startYear} - ${endYear}`;
});

function handleYearClick(year: number) {
  interval.value = 0;
  selectedYear.value = year;
  displayYearOptions.value = false;
}
</script>

<template>
  <div v-if="displayYearOptions" :class="$style.container">
    <div>
      <BaseHeader
        :arrows="['double']"
        @dobule-arrow-left-click="interval -= 10"
        @dobule-arrow-right-click="interval += 10"
      >
        {{ displayHeaderText }}
      </BaseHeader>
    </div>

    <div :class="$style.years">
      <button
        v-for="year in years"
        :key="year"
        :data-testid="`year-option-${year}`"
        :class="$style.year"
        @click="handleYearClick(year)"
      >
        {{ year }}
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

.years {
  flex: 1;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
}

.year {
  height: 30px;
  width: 60px;

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
