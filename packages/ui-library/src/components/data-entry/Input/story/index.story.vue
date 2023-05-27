<script setup lang="ts">
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseAddOn from "./ShowCaseAddOn.vue";
import ShowCaseInlineAddOn from "./ShowCaseInlineAddOn.vue";
</script>

<template>
  <Story title="Data Entry/Input">
    <Variant title="Basic usage">
      <ShowCaseBasicUsage></ShowCaseBasicUsage>
    </Variant>

    <Variant title="Add-on">
      <ShowCaseAddOn></ShowCaseAddOn>
    </Variant>

    <Variant title="Inline add-on">
      <ShowCaseInlineAddOn></ShowCaseInlineAddOn>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped></style>
