<script setup lang="ts">
import { EzCheckbox } from "@easy-ui-team/easy-ui";
</script>

<template>
  <ul>
    <li>
      <EzCheckbox :checked="true"></EzCheckbox>
    </li>

    <li>
      <EzCheckbox :checked="false"></EzCheckbox>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
