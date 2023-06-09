<script setup lang="ts">
import NormalUse from "./NormalUse.vue";
import FixedColumnCase from "./FixedColumnCase.vue";
import MultipleSelection from "./MultipleSelection.vue";
import SingleSelection from "./SingleSelection.vue";
import ExpandableRow from "./ExpandableRow.vue";
import CustomHeaderCase from "./CustomHeaderCase.vue";
import NodataCase from "./NodataCase.vue";
import SortCase from "./SortCase.vue";
import TextEllipsis from "./TextEllipsis.vue";
</script>

<template>
  <Story title="Date Display/Table">
    <Variant title="Normal use">
      <NormalUse></NormalUse>
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

    <Variant title="Custom Header">
      <CustomHeaderCase></CustomHeaderCase>
    </Variant>

    <Variant title="No Data">
      <NodataCase></NodataCase>
    </Variant>

    <Variant title="Sort Case">
      <SortCase></SortCase>
    </Variant>

    <Variant title="Text Ellipsis">
      <TextEllipsis></TextEllipsis>
    </Variant>
  </Story>
</template>
