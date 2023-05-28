<script setup lang="ts">
import UniCheckbox from "../UniCheckbox.vue";

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
        <li>checked: <UniCheckbox :checked="true"></UniCheckbox></li>
        <li>not checked: <UniCheckbox :checked="false"></UniCheckbox></li>
      </ul>
    </Variant>

    <Variant title="Indeterminate">
      <ul>
        <li>check: <UniCheckbox :checked="true" indeterminate></UniCheckbox></li>
        <li>not checked:<UniCheckbox :checked="false" indeterminate></UniCheckbox></li>
        <li>check & disabled <UniCheckbox :checked="true" disabled indeterminate></UniCheckbox></li>
        <li>
          not check & disabled <UniCheckbox :checked="false" disabled indeterminate></UniCheckbox>
        </li>
      </ul>
    </Variant>

    <Variant title="Checkbox Group">
      <CheckboxGroupCase></CheckboxGroupCase>
    </Variant>
  </Story>
</template>

<style scoped></style>
