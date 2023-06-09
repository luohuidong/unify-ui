<script setup lang="ts">
import { ref } from "vue";
import { UniSwitch } from "unify-ui";

const switchValue1 = ref(true);
const switchValue2 = ref(false);

function handleChange(value: boolean) {
  console.log("value", value);
}
</script>

<template>
  <UniSwitch v-model="switchValue1" @change="handleChange"></UniSwitch>
  <UniSwitch v-model="switchValue2" @change="handleChange"></UniSwitch>
</template>

<style lang="scss" scoped></style>
