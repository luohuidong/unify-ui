<script setup lang="ts">
import { ref } from "vue";

import UniSwitch from "../index.vue";

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
      <UniSwitch v-model="switchValue1" @change="handleChange"></UniSwitch>
    </Variant>

    <Variant title="Disabled">
      <UniSwitch v-model="switchValue2" disabled></UniSwitch>
      <UniSwitch v-model="switchValue3" disabled></UniSwitch>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
