<script setup lang="ts">
import { useInject } from "./useInject";

const { columnsData, rootProps, slotKeys, columnCount } = useInject();
</script>

<template>
  <tbody :class="$style.tableBody">
    <!-- 渲染 data 数据 -->
    <template v-for="record in rootProps.data" :key="(record[rootProps.rowKey] as string)">
      <!-- 渲染普通行 -->
      <tr :class="$style.normalRow">
        <td
          v-for="col in columnsData"
          :key="col.key"
          :style="{
            position: 'sticky',
            left: col.left && `${col.left}px`,
            right: col.right && `${col.right}px`,
            zIndex: col.fixed ? 1 : 0,
            width: col.width && `${col.width}px`,
          }"
        >
          <template v-if="slotKeys.has(col.key)">
            <slot name="rowCell" :column-key="col.key" :record="record"></slot>
          </template>

          <template v-else>
            {{ record[col.key] }}
          </template>
        </td>
      </tr>

      <!-- 渲染扩展行 -->
      <tr v-if="rootProps.rowExpand && rootProps.rowExpand.expandCondition(record)">
        <td :colspan="columnCount">
          <slot name="rowExpand" :record="record"></slot>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<style lang="scss" module>
.tableBody {
  .normalRow {
    white-space: nowrap;
    text-align: left;
    font-size: 14px;

    &:hover {
      background-color: #fafbfd;
    }
  }

  tr > td {
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    background: white;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
