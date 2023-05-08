<script setup lang="ts">
import { ref } from "vue";
import { EzSwitch } from "unify-ui";

const switchValue1 = ref(true);
const switchValue2 = ref(false);

function handleChange(value: boolean) {
  console.log("value", value);
}
</script>

<template>
  <EzSwitch v-model="switchValue1" @change="handleChange"></EzSwitch>
  <EzSwitch v-model="switchValue2" @change="handleChange"></EzSwitch>
</template>

<style lang="scss" scoped></style>
