<script setup lang="ts">
import { ref } from "vue";
import { EzSwitch } from "@easy-ui-team/easy-ui";

const switchValue1 = ref(true);
const switchValue2 = ref(false);
</script>

<template>
  <EzSwitch v-model="switchValue1" disabled></EzSwitch>
  <EzSwitch v-model="switchValue2" disabled></EzSwitch>
</template>

<style lang="scss" scoped></style>
