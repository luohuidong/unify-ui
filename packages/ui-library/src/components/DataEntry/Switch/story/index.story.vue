<script setup lang="ts">
import { ref } from "vue";

import EzSwitch from "../index.vue";

const switchValue1 = ref(true);

function handleChange(value: boolean) {
  console.log("value", value);
}

const switchValue2 = ref(true);
const switchValue3 = ref(false);
</script>

<template>
  <Story title="Data Entry/Switch">
    <Variant title="Basic Usage">
      <EzSwitch v-model="switchValue1" @change="handleChange"></EzSwitch>
    </Variant>

    <Variant title="Disabled">
      <EzSwitch v-model="switchValue2" disabled></EzSwitch>
      <EzSwitch v-model="switchValue3" disabled></EzSwitch>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
