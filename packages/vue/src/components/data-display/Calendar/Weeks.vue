<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniCalendarWeeks",
});
</script>

<script setup lang="ts"></script>

<template>
  <ul :class="$style.weeks">
    <li>Sun</li>
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Thu</li>
    <li>Fri</li>
    <li>Sat</li>
  </ul>
</template>

<style lang="scss" module>
.weeks {
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;

  list-style: none;
}

.weeks > li {
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
}
</style>
