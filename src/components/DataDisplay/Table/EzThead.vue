<script setup lang="ts">
import { useInject } from "./composable";
import commonStyle from "./commonStyle.module.scss";

import EzTheadSelection from "./EzTheadSelection.vue";

const { columnsData, showShadow, rootProps, rootSlotKeys } = useInject();
</script>

<template>
  <thead>
    <tr>
      <template v-if="rootProps.rowExpand">
        <th :class="[$style['cell'], $style['expand-column-cell']]"></th>
      </template>

      <template v-if="rootProps.selection?.type">
        <EzTheadSelection :class="$style['cell']"></EzTheadSelection>
      </template>

      <th
        v-for="(col, index) in columnsData"
        :key="col.key"
        scoop="column"
        :style="{
          left: col.leftOffset && `${col.leftOffset}px`,
          right: col.rightOffset && `${col.rightOffset}px`,
          zIndex: col.fixed ? 3 : 2,
        }"
        :class="[
          $style['cell'],
          {
            [commonStyle['cell--shadow-right']]:
              col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
            [commonStyle['cell--shadow-left']]:
              col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
          },
        ]"
      >
        <template v-if="rootSlotKeys.has(`header-${col.key}`)">
          <slot name="theadCell" :column-key="`header-${col.key}`"></slot>
        </template>
        <template v-else>
          {{ col.title }}
        </template>
        <div v-if="index !== columnsData.length - 1" :class="$style.divider"></div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
$border-color: #f0f0f0;

.cell {
  box-sizing: border-box;

  position: sticky;
  top: 0;

  height: 50px;
  padding: 16px;

  word-wrap: break-word;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid $border-color;
  background: #f5f6fa;
  color: #666666;
}

.expand-column-cell {
  position: sticky;
  left: 0;
  z-index: 3;
}

.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2px;
  background: $border-color;
}
</style>
