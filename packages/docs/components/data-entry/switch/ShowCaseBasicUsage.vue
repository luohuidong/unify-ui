<script setup lang="ts">
import { ref } from "vue";

import { EzSwitch } from "@easy-ui-team/easy-ui";

const switchValue = ref(false);

function handleChange(value: boolean) {
  console.log("value", value);
}
</script>

<template>
  <EzSwitch v-model="switchValue" @change="handleChange"></EzSwitch>
</template>

<style lang="scss" scoped></style>
