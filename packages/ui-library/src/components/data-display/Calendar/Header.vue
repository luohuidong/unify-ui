<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePickerHeader",
});
</script>

<script setup lang="ts">
import { computed } from "vue";
import { ArrowLeft, ArrowRight } from "@/icons";
import { useStore } from "./composables";

const { state, actions } = useStore();
const { yearOfCurrentDate, monthOfCurrentDate } = state;
const { handleChangeToNextMonth, handleChangeToPreviousMonth } = actions;
const currentDate = computed(() => new Date(yearOfCurrentDate.value, monthOfCurrentDate.value, 1));

// format date to "Month Year"
const formatDate = computed(() => {
  const month = currentDate.value.toLocaleString("default", { month: "long" });
  const year = currentDate.value.getFullYear();
  return `${month} ${year}`;
});
</script>

<template>
  <div :class="$style.header">
    <div :class="$style['header__current-date']">{{ formatDate }}</div>

    <div :class="$style['header__icons']">
      <ArrowLeft :class="$style.header__icon" @click="handleChangeToPreviousMonth" />
      <ArrowRight :class="[$style.header__icon, $style['header__icon--right']]" @click="handleChangeToNextMonth" />
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
  user-select: none;
}

.header__current-date {
  font-size: 1.45rem;
  font-weight: 500;
}

.header__icons {
  display: flex;
  user-select: none;
}

.header__icon {
  height: 14px;
  width: 14px;
  cursor: pointer;
  color: rgb(156, 163, 175);
  text-align: center;

  &:hover {
    color: rgb(107 114 128);
  }
}

.header__icon--right {
  margin-left: 18px;
}
</style>
