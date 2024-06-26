<script setup lang="ts">
import { UniCheckbox } from "unify-ui";
</script>

<template>
  <ul>
    <li>
      <UniCheckbox :checked="true" indeterminate label="check"></UniCheckbox>
    </li>

    <li>
      <UniCheckbox :checked="false" indeterminate label="not checked"></UniCheckbox>
    </li>

    <li>
      <UniCheckbox :checked="true" disabled indeterminate label="check & disabled"></UniCheckbox>
    </li>

    <li>
      <UniCheckbox :checked="false" disabled indeterminate label="not check & disabled"></UniCheckbox>
    </li>
  </ul>
</template>
