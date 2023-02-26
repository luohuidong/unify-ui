<script setup lang="ts">
import EzTbodySelection from "./EzTbodySelection.vue";
import { useInject } from "./useInject";
import commonStyle from "./commonStyle.module.scss";

const { columnsData, rootProps, slotKeys, columnCount, showShadow } = useInject();
</script>

<template>
  <tbody>
    <!-- 渲染 data 数据 -->
    <template v-for="record in rootProps.data" :key="(record[rootProps.rowKey] as string)">
      <!-- 渲染普通行 -->
      <tr :class="$style.normalRow">
        <template v-if="rootProps.selection?.type">
          <EzTbodySelection :record="record"></EzTbodySelection>
        </template>

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
            $style.cell,
            {
              [commonStyle.showLeftColumnShadow]:
                col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
              [commonStyle.showRightColumnShadow]:
                col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
              [commonStyle.ellipsis]: !col.fixed,
            },
          ]"
        >
          <div :class="[commonStyle.cellContent, commonStyle.ellipsis]">
            <template v-if="slotKeys.has(col.key)">
              <slot name="rowCell" :column-key="col.key" :record="record"></slot>
            </template>

            <template v-else>
              {{ record[col.key] }}
            </template>
          </div>
        </td>
      </tr>

      <!-- 渲染扩展行 -->
      <tr v-if="rootProps.rowExpand && rootProps.rowExpand.expandCondition(record)">
        <td :colspan="columnCount" :class="$style.expandRowCell" :style="{ padding: '16px' }">
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

  .cell {
    position: relative;
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
    background: white;
  }
}

.expandRowCell {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  background: white;
}
</style>
