<script setup lang="ts">
import { useInject } from "./useInject";

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
          zIndex: col.fixed ? 2 : 1,
        }"
        :class="{
          [$style.showLeftColumnShadow]:
            col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
        }"
      >
        {{ col.title }}
      </th>
    </tr>
  </thead>
</template>

<style lang="scss" module>
.tableHead {
  > tr > th {
    position: sticky;
    top: 0;

    white-space: nowrap;
    padding: 16px;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #f0f0f0;
    background: #f5f6fa;
    color: #666666;
  }
}

.showLeftColumnShadow:after {
  box-shadow: 15px 0 15px -15px inset rgba($color: #000000, $alpha: 0.3);
  content: " ";
  height: 100%;
  position: absolute;
  top: 0;
  right: -15px;
  width: 15px;
}
</style>
