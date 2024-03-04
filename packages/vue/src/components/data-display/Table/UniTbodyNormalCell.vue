<script setup lang="ts">
import type { ColumnData } from "./types";
import commonStyle from "./commonStyle.module.scss";
import { useInject } from "./composables";

defineProps<{
  col: ColumnData;
}>();

const { tableProps, showShadow } = useInject();
</script>

<template>
  <td
    :style="{
      position: col.fixed && 'sticky',
      left: col.leftOffset && `${col.leftOffset}px`,
      right: col.rightOffset && `${col.rightOffset}px`,
      zIndex: col.fixed ? 1 : 0,
    }"
    :class="[
      $style['cell'],
      {
        [commonStyle['cell--shadow-right']]: col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
        [commonStyle['cell--shadow-left']]: col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
        [$style['cell--text-ellipsis']]: col.ellipsis,
      },
      tableProps.tbodyCellClass,
    ]"
  >
    <slot></slot>
  </td>
</template>

<style lang="scss" module>
@use "@/styles/utils";
@use "./styles/tbody";

.cell {
  @include tbody.cell;
}

.cell--text-ellipsis {
  @include utils.text-ellipsis;
}
</style>
