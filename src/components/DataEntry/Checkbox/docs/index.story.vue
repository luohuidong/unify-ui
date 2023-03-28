<script setup lang="ts">
import EzCheckbox from "../EzCheckbox.vue";

import NormalUseCase from "./NormalUseCase.vue";
import CheckboxGroupCase from "./CheckboxGroupCase.vue";
</script>

<template>
  <Story title="Data Entry/Checkbox">
    <Variant title="Normal use">
      <NormalUseCase></NormalUseCase>
    </Variant>

    <Variant title="No label">
      <ul>
        <li>checked: <EzCheckbox :checked="true"></EzCheckbox></li>
        <li>not checked: <EzCheckbox :checked="false"></EzCheckbox></li>
      </ul>
    </Variant>

    <Variant title="Indeterminate">
      <ul>
        <li>check: <EzCheckbox :checked="true" indeterminate></EzCheckbox></li>
        <li>not checked:<EzCheckbox :checked="false" indeterminate></EzCheckbox></li>
        <li>check & disabled <EzCheckbox :checked="true" indeterminate></EzCheckbox></li>
        <li>not check & disabled <EzCheckbox :checked="false" indeterminate></EzCheckbox></li>
      </ul>
    </Variant>

    <Variant title="Checkbox Group">
      <CheckboxGroupCase></CheckboxGroupCase>
    </Variant>
  </Story>
</template>

<style scoped></style>
