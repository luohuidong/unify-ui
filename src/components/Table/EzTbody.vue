<script setup lang="ts">
import { useInject } from "./useInject";

const { columnsData, rootProps, slotKeys, columnCount, showShadow } = useInject();
</script>

<template>
  <tbody>
    <!-- 渲染 data 数据 -->
    <template v-for="record in rootProps.data" :key="(record[rootProps.rowKey] as string)">
      <!-- 渲染普通行 -->
      <tr :class="$style.normalRow">
        <td
          v-for="col in columnsData"
          :key="col.key"
          :style="{
            position: col.fixed && 'sticky',
            left: col.leftOffset && `${col.leftOffset}px`,
            right: col.rightOffset && `${col.rightOffset}px`,
            zIndex: col.fixed ? 1 : 0,
            width: col.width && `${col.width}px`,
          }"
          :class="[
            $style.tableData,
            {
              [$style.showLeftColumnShadow]:
                col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
            },
          ]"
        >
          <template v-if="slotKeys.has(col.key)">
            <div>
              <slot name="rowCell" :column-key="col.key" :record="record"></slot>
            </div>
          </template>

          <template v-else>
            {{ record[col.key] }}
          </template>
        </td>
      </tr>

      <!-- 渲染扩展行 -->
      <tr v-if="rootProps.rowExpand && rootProps.rowExpand.expandCondition(record)">
        <td :colspan="columnCount" :class="$style.tableData">
          <slot name="rowExpand" :record="record"></slot>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<style lang="scss" module>
.normalRow {
  white-space: nowrap;
  text-align: left;
  font-size: 14px;

  &:hover {
    background-color: #fafbfd;
  }
}
.tableData {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  background: white;
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
