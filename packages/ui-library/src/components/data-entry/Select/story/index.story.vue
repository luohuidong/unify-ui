<script setup lang="ts">
import { ref } from "vue";
import UniSelect from "../index.vue";

const options = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
  { label: "D", value: "d" },
  { label: "E", value: "e" },
  { label: "F", value: "f" },
];

const value = ref();
</script>

<template>
  <Story title="Data Entry/Select">
    <div class="container">
      <UniSelect v-model="value" :options="options"> </UniSelect>
    </div>
  </Story>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
  padding: 20px;
}
</style>
