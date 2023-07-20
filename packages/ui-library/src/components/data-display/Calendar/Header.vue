<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePickerHeader",
});
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "./composables";
import { BaseHeader } from "./components";

const { state, actions } = useStore();
const { selectedYear, selectedMonth, displayYearOptions, displayMonthOptions } = state;
const { handleChangeToNextMonth, handleChangeToPreviousMonth } = actions;
const currentDate = computed(() => new Date(selectedYear.value, selectedMonth.value, 1));

const month = computed(() => currentDate.value.toLocaleString("default", { month: "long" }));
const year = computed(() => currentDate.value.getFullYear());
</script>

<template>
  <BaseHeader
    @arrow-left-click="handleChangeToPreviousMonth"
    @arrow-right-click="handleChangeToNextMonth"
    @dobule-arrow-left-click="selectedYear -= 1"
    @dobule-arrow-right-click="selectedYear += 1"
  >
    <div :class="$style['header__current-date']">
      <span :class="$style['header__month']" @click="displayMonthOptions = true">{{ month }}</span> &nbsp;
      <span :class="$style['header__year']" @click="displayYearOptions = true">{{ year }}</span>
    </div>
  </BaseHeader>
</template>

<style lang="scss" module>
@use "@/styles/color";

.header__current-date {
  font-size: 1.45rem;
  font-weight: 500;
}

.header__year,
.header__month {
  cursor: pointer;

  &:hover {
    color: color.$primary;
  }
}
</style>
