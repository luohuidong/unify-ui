<script setup lang="ts">
import SlotTableCase from "./SlotTableCase.vue";
import FixedColumnCase from "./FixedColumnCase.vue";
import MultipleSelection from "./MultipleSelection.vue";
import SingleSelection from "./SingleSelection.vue";
import ExpandableRow from "./ExpandableRow.vue";
</script>

<template>
  <Story title="Date Display/Table">
    <Variant title="Normal use">
      <SlotTableCase></SlotTableCase>
    </Variant>

    <Variant title="Fixed Column">
      <FixedColumnCase></FixedColumnCase>
    </Variant>

    <Variant title="Multiple Selection">
      <MultipleSelection></MultipleSelection>
    </Variant>

    <Variant title="Single Selection">
      <SingleSelection></SingleSelection>
    </Variant>

    <Variant title="ExpandableRow">
      <ExpandableRow></ExpandableRow>
    </Variant>
  </Story>
</template>
