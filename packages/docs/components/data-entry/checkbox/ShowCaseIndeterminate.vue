<script setup lang="ts">
import { EzCheckbox } from "unify-ui";
</script>

<template>
  <ul>
    <li>
      <EzCheckbox :checked="true" indeterminate label="check"></EzCheckbox>
    </li>

    <li>
      <EzCheckbox
        :checked="false"
        indeterminate
        label="not checked"
      ></EzCheckbox>
    </li>

    <li>
      <EzCheckbox
        :checked="true"
        disabled
        indeterminate
        label="check & disabled"
      ></EzCheckbox>
    </li>

    <li>
      <EzCheckbox
        :checked="false"
        disabled
        indeterminate
        label="not check & disabled"
      ></EzCheckbox>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
