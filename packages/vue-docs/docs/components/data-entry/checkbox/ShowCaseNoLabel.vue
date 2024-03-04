<script setup lang="ts">
import { UniCheckbox } from "unify-ui";
</script>

<template>
  <ul>
    <li>
      <UniCheckbox :checked="true"></UniCheckbox>
    </li>

    <li>
      <UniCheckbox :checked="false"></UniCheckbox>
    </li>
  </ul>
</template>
