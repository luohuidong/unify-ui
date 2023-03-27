<script setup lang="ts">
import CommonUseCase from "./CommonUseCase.vue";
import TriggerMethod from "./TriggerMethodCase.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <Variant title="default">
      <CommonUseCase></CommonUseCase>
    </Variant>

    <Variant title="Trigger method">
      <TriggerMethod></TriggerMethod>
    </Variant>
  </Story>
</template>

<style scoped></style>
