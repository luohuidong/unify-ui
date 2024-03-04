<script setup lang="ts">
import { ref } from "vue";
import { UniCheckbox } from "unify-ui";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<template>
  <UniCheckbox v-model:checked="checked1" label="checked & disabled" disabled></UniCheckbox>
  <UniCheckbox v-model:checked="checked2" label="not checked & disabled" disabled></UniCheckbox>
</template>
