<script setup lang="ts">
import { reactive, computed } from "vue";

import { useInject, useSelection } from "./composable";
import type { Record } from "./types";
import commonStyle from "./commonStyle.module.scss";

import { UniCheckbox } from "@/components";
import Add from "./icons/Add.vue";
import Minus from "./icons/Minus.vue";
import UniTbodyExpandRow from "./UniTbodyExpandRow.vue";

defineProps<{
  record: Record;
}>();

const { tableProps, columnsData, rootSlotKeys, showShadow, tableState } = useInject();
const { handleCheckboxChange, handleRadioClick } = useSelection();

const state = reactive({
  showExpandRow: tableProps.rowExpand?.showExpandRowDefault || false,
});

function toggleExpandRow() {
  state.showExpandRow = !state.showExpandRow;
}

const selectionColumnOffset = computed(() => tableState.selectionColumnOffset + "px");
</script>

<template>
  <!-- normal row -->
  <tr
    class="normal-row"
    :class="[
      {
        ['normal-row--selection']: tableProps.selectedRowKeys.has(record[tableProps.rowKey]),
      },
      tableProps.tbodyRowClass,
    ]"
  >
    <!-- expand column cell -->
    <td
      v-if="tableState.showExpandToggleCell"
      class="normal-row__cell normal-row__expand-toggle-cell"
      :class="tableProps.tbodyCellClass"
    >
      <div
        class="cell__inner"
        :class="[
          commonStyle['cell__inner--horizontal-center'],
          { [commonStyle['cell--shadow-right']]: showShadow.expandColumnShadowVisible },
        ]"
      >
        <component
          :is="state.showExpandRow ? Minus : Add"
          v-if="tableProps.rowExpand?.expandCondition(record)"
          :width="20"
          :height="20"
          class="normal-row__expand-toggle-cell-icon"
          @click="toggleExpandRow"
        ></component>
      </div>
    </td>

    <!-- selection column cell -->
    <td
      v-if="tableProps.selection?.type"
      class="normal-row__cell normal-row__selection-toggle-cell"
      :class="tableProps.tbodyCellClass"
    >
      <div
        :class="[
          commonStyle['cell__inner'],
          commonStyle['cell__inner--horizontal-center'],
          { [commonStyle['cell--shadow-right']]: showShadow.selectionColumnShadowVisible },
        ]"
      >
        <UniCheckbox
          v-if="tableProps.selection?.type === 'multiple'"
          :checked="tableProps.selectedRowKeys.has(record[tableProps.rowKey])"
          :disabled="tableProps.selection?.disabledCondition?.(record)"
          @change="(checked) => handleCheckboxChange(record, checked)"
        ></UniCheckbox>

        <input
          v-else
          type="radio"
          :checked="tableProps.selectedRowKeys.has(record[tableProps.rowKey])"
          :disabled="tableProps.selection?.disabledCondition?.(record)"
          @change="() => handleRadioClick(record)"
        />
      </div>
    </td>

    <td
      v-for="col in columnsData"
      :key="col.key"
      :style="{
        position: col.fixed && 'sticky',
        left: col.leftOffset && `${col.leftOffset}px`,
        right: col.rightOffset && `${col.rightOffset}px`,
        zIndex: col.fixed ? 1 : 0,
      }"
      class="normal-row__cell"
      :class="[
        {
          [commonStyle['cell--shadow-right']]:
            col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
          [commonStyle['cell--shadow-left']]:
            col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
          ['normal-row__cell--text-ellipsis']: col.ellipsis,
        },
        tableProps.tbodyCellClass,
      ]"
    >
      <template v-if="rootSlotKeys.has(col.key)">
        <slot name="rowCell" :column-key="col.key"></slot>
      </template>

      <template v-else>
        <span :title="col.ellipsis && record[col.key]">{{ record[col.key] }}</span>
      </template>
    </td>
  </tr>

  <!-- expand row -->
  <UniTbodyExpandRow
    v-if="state.showExpandRow && tableProps.rowExpand?.expandCondition(record)"
    :record="record"
  >
    <slot name="rowExpand"></slot>
  </UniTbodyExpandRow>
</template>

<style lang="scss" scoped>
.normal-row {
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  background-color: white;

  &:hover {
    background: #fafbfd;
  }
}

.normal-row--selection {
  background: #eaf2ff;

  &:hover {
    background: #d5e8fe;
  }
}

.normal-row__cell {
  word-wrap: break-word;
  box-sizing: border-box;
  position: relative;
  height: 44px;
  padding: 13px 16px;
  border-bottom: 1px solid #f0f0f0;
  background: inherit;
}

.normal-row__cell--text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.normal-row__expand-toggle-cell {
  position: sticky;
  left: 0;
  z-index: 1;
}

.normal-row__expand-toggle-cell-icon {
  color: grey;
  cursor: pointer;

  &:hover {
    color: #409eff;
  }
}

.normal-row__selection-toggle-cell {
  position: sticky;
  left: v-bind(selectionColumnOffset);
  z-index: 1;
}
</style>
