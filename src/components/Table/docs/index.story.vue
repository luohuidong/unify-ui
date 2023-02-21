<script setup lang="ts">
import SlotTableCase from "./SlotTableCase.vue";
import FixedColumnCase from "./FixedColumnCase.vue";
</script>

<template>
  <Story title="Date Display/Table">
    <Variant title="Normal use">
      <SlotTableCase></SlotTableCase>
    </Variant>

    <Variant title="Fixed Column">
      <FixedColumnCase></FixedColumnCase>
    </Variant>
  </Story>
</template>
