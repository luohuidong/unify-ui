<script setup lang="ts">
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseConfirmModal from "./ShowCaseConfirmModal.vue";
</script>

<template>
  <Story title="Feedback/Modal">
    <Variant title="Basic Usage">
      <ShowCaseBasicUsage></ShowCaseBasicUsage>
    </Variant>

    <Variant title="Alret Modal">
      <ShowCaseConfirmModal></ShowCaseConfirmModal>
    </Variant>
  </Story>
</template>
