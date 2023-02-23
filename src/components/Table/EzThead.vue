<script setup lang="ts">
import { useInject } from "./useInject";
import commonStyle from "./commonStyle.module.scss";

const { columnsData, showShadow } = useInject();
</script>

<template>
  <thead :class="$style.tableHead">
    <tr>
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
        :class="{
          [commonStyle.showLeftColumnShadow]:
            col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
          [commonStyle.showRightColumnShadow]:
            col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
        }"
      >
        <div :class="[commonStyle.cellContent, commonStyle.ellipsis]">
          {{ col.title }}
        </div>
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.tableHead {
  > tr > th {
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
}
</style>
