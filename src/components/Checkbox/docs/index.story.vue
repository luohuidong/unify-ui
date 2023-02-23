<script setup lang="ts">
import { ref } from "vue";

import EzCheckbox from "../EzCheckbox.vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
</script>

<template>
  <Story title="Data Entry/Checkbox">
    <Variant title="Normal use">
      <EzCheckbox v-model="checked1" label="One"></EzCheckbox>
      <EzCheckbox v-model="checked2" label="Two"></EzCheckbox>
      <EzCheckbox v-model="checked2" label="Two" disabled></EzCheckbox>
    </Variant>

    <Variant title="No label">
      <EzCheckbox v-model="checked2"></EzCheckbox>
    </Variant>

    <Variant title="Indeterminate">
      <EzCheckbox v-model="checked3" indeterminate></EzCheckbox>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  height: 100px;
}
</style>
