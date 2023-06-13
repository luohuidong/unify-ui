<script setup lang="ts">
import ShowCaseBasicUsage from "./ShowCaseBasicUsage.vue";
import ShowCaseCustomizedFormControl from "./ShowCaseCustomizedFormControl.vue";
</script>

<template>
  <Story title="Data Entry/Form">
    <Variant title="Basic Usage">
      <ShowCaseBasicUsage></ShowCaseBasicUsage>
    </Variant>

    <Variant title="Custom Component">
      <ShowCaseCustomizedFormControl></ShowCaseCustomizedFormControl>
    </Variant>
  </Story>
</template>
