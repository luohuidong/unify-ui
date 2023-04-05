<script setup lang="ts">
import CaseBaseUsage from "./CaseBaseUsage.vue";
import CaseTriggerMethod from "./CaseTriggerMethod.vue";
import CaseVisible from "./CaseVisible.vue";
</script>

<template>
  <Story title="Date Display/Popup">
    <Variant title="Base usage">
      <CaseBaseUsage></CaseBaseUsage>
    </Variant>

    <Variant title="Trigger method">
      <CaseTriggerMethod></CaseTriggerMethod>
    </Variant>

    <Variant title="Visible">
      <div>test</div>
    </Variant>
  </Story>
</template>

<style scoped></style>
