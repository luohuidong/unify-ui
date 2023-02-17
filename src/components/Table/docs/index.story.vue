<script setup lang="ts">
import SlotTableCase from "./SlotTableCase.vue";
import VNodeTableCase from "./VNodeTableCase.vue";
</script>

<template>
  <Story title="Date Display/Table">
    <Variant title="SlotTable">
      <SlotTableCase></SlotTableCase>
    </Variant>

    <Variant title="VNodeTableCase">
      <VNodeTableCase></VNodeTableCase>
    </Variant>
  </Story>
</template>
