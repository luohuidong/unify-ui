<script setup lang="ts">
import { useInject } from "./composable";
import commonStyle from "./commonStyle.module.scss";
import { expandColumnWidth } from "./constant";

import EzTheadSelection from "./EzTheadSelection.vue";

const { columnsData, showShadow, rootProps, rootSlotKeys } = useInject();
</script>

<template>
  <thead :class="$style.tableHead">
    <tr>
      <template v-if="rootProps.rowExpand">
        <th
          :class="[$style['cell'], $style['expand-column-cell']]"
          :style="{ width: expandColumnWidth + 'px' }"
        ></th>
      </template>

      <template v-if="rootProps.selection?.type">
        <EzTheadSelection :class="$style['cell']"></EzTheadSelection>
      </template>

      <th
        v-for="col in columnsData"
        :key="col.key"
        scoop="column"
        :style="{
          width: col.width && `${col.width}px`,
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
        <div :class="commonStyle['cell__inner']">
          <template v-if="rootSlotKeys.has(`header-${col.key}`)">
            <slot name="theadCell" :column-key="`header-${col.key}`"></slot>
          </template>
          <template v-else>
            {{ col.title }}
          </template>
        </div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.cell {
  box-sizing: border-box;

  position: sticky;
  top: 0;

  height: 50px;

  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
  background: #f5f6fa;
  color: #666666;
}

.expand-column-cell {
  position: sticky;
  left: 0;
  z-index: 3;
}
</style>
