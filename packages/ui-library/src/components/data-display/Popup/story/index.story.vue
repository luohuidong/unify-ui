<script setup lang="ts">
import CaseBaseUsage from "./CaseBaseUsage.vue";
import CaseTriggerMethod from "./CaseTriggerMethod.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <Variant title="Base usage">
      <CaseBaseUsage></CaseBaseUsage>
    </Variant>

    <Variant title="Trigger method">
      <CaseTriggerMethod></CaseTriggerMethod>
    </Variant>
  </Story>
</template>

<style scoped></style>
