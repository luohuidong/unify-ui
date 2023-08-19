<script setup lang="ts">
import { useInject } from "./composables";

const { columnsInfo } = useInject();
const { hasLeftFixedColumn } = columnsInfo;
</script>

<template>
  <th
    :class="[
      $style['header__expand-column-cell'],
      {
        [$style['header__expand-column-cell--left-sticky']]: hasLeftFixedColumn,
      },
    ]"
  ></th>
</template>

<style lang="scss" module>
.header__expand-column-cell {
  z-index: 3;
}

.header__expand-column-cell--left-sticky {
  position: sticky;
  left: 0;
}
</style>
