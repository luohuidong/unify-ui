<script setup lang="ts">
import { useInject } from "./composables";

const { columnsInfo } = useInject();
const { hasLeftFixedColumn } = columnsInfo;
</script>

<template>
  <th
    :class="[
      $style['cell'],
      {
        [$style['cell--left-sticky']]: hasLeftFixedColumn,
      },
    ]"
  ></th>
</template>

<style lang="scss" module>
@use "./styles/thead";

.cell {
  @include thead.cell;
  @include thead.cell--sticky-top;
}

.cell--left-sticky {
  left: 0;
  z-index: 3;
}
</style>
