<script setup lang="ts">
import { ref } from "vue";

import { EzCheckbox } from "@/components";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<template>
  <Story title="Data Entry/Checkbox">
    <div class="container">
      <EzCheckbox v-model="checked1" label="One"></EzCheckbox>
      <EzCheckbox v-model="checked2" label="Two"></EzCheckbox>
      <EzCheckbox v-model="checked2" label="Two" disabled></EzCheckbox>
    </div>
  </Story>
</template>

<style scoped>
.container {
  height: 100px;
}
</style>
