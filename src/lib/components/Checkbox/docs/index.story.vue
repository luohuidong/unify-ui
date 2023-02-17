<script setup lang="ts">
import { ref } from "vue";

import SCheckbox from "../index.vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<template>
  <Story title="Data Entry/Checkbox">
    <div class="container">
      <s-checkbox v-model="checked1" label="One"></s-checkbox>
      <s-checkbox v-model="checked2" label="Two"></s-checkbox>
      <s-checkbox v-model="checked2" label="Two" disabled></s-checkbox>
    </div>
  </Story>
</template>

<style scoped>
.container {
  height: 100px;
}
</style>
