<script setup lang="ts">
import { ref } from "vue";
import { UniSwitch } from "unify-ui";

const switchValue1 = ref(true);
const switchValue2 = ref(false);
</script>

<template>
  <UniSwitch v-model="switchValue1" disabled></UniSwitch>
  <UniSwitch v-model="switchValue2" disabled></UniSwitch>
</template>
