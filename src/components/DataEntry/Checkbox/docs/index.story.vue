<script setup lang="ts">
import { ref } from "vue";

import EzCheckbox from "../EzCheckbox.vue";
import EzCheckboxGroup from "../EzCheckboxGroup.vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);

const options = [
  {
    label: "test1",
    value: "test1",
  },
  {
    label: "test2",
    value: "test2",
  },
  {
    label: "test3",
    value: "test3",
  },
];

const checkboxGroupValue = ref(new Set<string>());
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

    <Variant title="Checkbox Group">
      <EzCheckboxGroup v-model="checkboxGroupValue" :options="options"></EzCheckboxGroup>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  height: 100px;
}
</style>
