<script setup lang="ts">
import { ref } from "vue";
import { EzCheckbox } from "unify-ui";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<template>
  <div>
    <EzCheckbox
      v-model:checked="checked1"
      label="checked & disabled"
      disabled
    ></EzCheckbox>

    <EzCheckbox
      v-model:checked="checked2"
      label="not checked & disabled"
      disabled
    ></EzCheckbox>
  </div>
</template>

<style lang="scss" module></style>
