<script setup lang="ts">
import NormalUseCase from "./NormalUseCase.vue";
import DisabledCase from "./DisabledCase.vue";
</script>

<template>
  <Story title="Data Display/Tooltip">
    <Variant title="Normal use">
      <NormalUseCase></NormalUseCase>
    </Variant>

    <Variant title="Disabled Case">
      <DisabledCase></DisabledCase>
    </Variant>
  </Story>
</template>

<style scoped></style>
