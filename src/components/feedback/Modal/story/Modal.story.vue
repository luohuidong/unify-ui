<script setup lang="ts">
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseConfirmModal from "./ShowCaseConfirmModal.vue";
import ShowCaseInternationalize from "./ShowCaseInternationalize.vue";
</script>

<template>
  <Story title="Feedback/Modal">
    <Variant title="Basic Usage">
      <ShowCaseBasicUsage></ShowCaseBasicUsage>
    </Variant>

    <Variant title="Confirm Modal">
      <ShowCaseConfirmModal></ShowCaseConfirmModal>
    </Variant>

    <Variant title="Internationalize">
      <ShowCaseInternationalize></ShowCaseInternationalize>
    </Variant>
  </Story>
</template>
