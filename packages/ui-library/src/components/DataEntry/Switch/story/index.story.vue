<script setup lang="ts">
import { ref } from "vue";

import EzSwitch from "../index.vue";

const switchValue = ref(false);

function handleChange(value: boolean) {
  console.log("value", value);
}
</script>

<template>
  <Story title="Data Entry/Switch">
    <Variant title="Basic Usage">
      <EzSwitch v-model="switchValue" @change="handleChange"></EzSwitch>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
