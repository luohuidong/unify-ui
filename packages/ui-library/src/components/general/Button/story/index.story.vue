<script setup lang="ts">
import ShowCasePrimary from "./ShowCasePrimary.vue";
import ShowCaseSecondary from "./ShowCaseSecondary.vue";
import ShowCaseSoft from "./ShowCaseSoft.vue";
import ShowCaseRounded from "./ShowCaseRounded.vue";
import ShowCaseDisabled from "./ShowCaseDisabled.vue";
</script>

<template>
  <Story title="Generel/Button">
    <Variant title="Primary Buttons">
      <ShowCasePrimary></ShowCasePrimary>
    </Variant>

    <Variant title="Secondary Buttons">
      <ShowCaseSecondary></ShowCaseSecondary>
    </Variant>

    <Variant title="Soft Buttons">
      <ShowCaseSoft></ShowCaseSoft>
    </Variant>

    <Variant title="Rounded Border">
      <ShowCaseRounded></ShowCaseRounded>
    </Variant>

    <Variant title="Disabled">
      <ShowCaseDisabled></ShowCaseDisabled>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
