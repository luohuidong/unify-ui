<script setup lang="ts">
import { reactive } from "vue";

import { useInject, useSelection } from "./composable";
import type { Record } from "./types";
import commonStyle from "./commonStyle.module.scss";
import { expandColumnWidth } from "./constant";

import { EzCheckbox } from "@/components";
import Add from "./icons/Add.vue";
import Minus from "./icons/Minus.vue";
import EzTbodyExpandRow from "./EzTbodyExpandRow.vue";

defineProps<{
  record: Record;
}>();

const { rootProps, columnsData, rootSlotKeys, columnCount, showShadow, rootState } = useInject();
const { handleCheckboxChange, handleRadioClick } = useSelection();

const state = reactive({
  showExpandRow: rootProps.rowExpand?.showExpandRowDefault || false,
});

function toggleExpandRow() {
  state.showExpandRow = !state.showExpandRow;
}
</script>

<template>
  <!-- normal row -->
  <tr
    :class="[
      $style['normal-row'],
      {
        [$style['normal-row--selection']]: rootState.selectedRowKeys.has(record[rootProps.rowKey]),
      },
      rootProps.tbodyRowClass,
    ]"
  >
    <!-- expand column cell -->
    <td
      v-if="rootProps.rowExpand"
      :style="{ width: expandColumnWidth + 'px' }"
      :class="[$style['normal-row__cell'], $style['normal-row__expand-toggle-cell']]"
    >
      <div
        v-if="rootProps.rowExpand?.expandCondition(record)"
        :class="[commonStyle['cell__inner'], commonStyle['cell__inner--horizontal-center']]"
      >
        <component
          :is="state.showExpandRow ? Minus : Add"
          :width="20"
          :height="20"
          :class="$style['normal-row__expand-toggle-cell-icon']"
          @click="toggleExpandRow"
        ></component>
      </div>
    </td>

    <!-- selection column cell -->
    <td
      v-if="rootProps.selection?.type"
      :class="[$style['normal-row__cell'], $style['normal-row__selection-toggle-cell']]"
    >
      <div
        v-if="rootProps.selection?.type === 'multiple'"
        :class="[commonStyle['cell__inner'], commonStyle['cell__inner--horizontal-center']]"
      >
        <EzCheckbox
          :checked="rootState.selectedRowKeys.has(record[rootProps.rowKey])"
          :disabled="rootProps.selection?.disabledCondition?.(record)"
          @change="(checked) => handleCheckboxChange(record, checked)"
        ></EzCheckbox>
      </div>
      <div v-else :class="commonStyle['cell__inner']">
        <input
          type="radio"
          :checked="rootState.selectedRowKeys.has(record[rootProps.rowKey])"
          :disabled="rootProps.selection?.disabledCondition?.(record)"
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
        width: col.width && `${col.width}px`,
      }"
      :class="[
        $style['normal-row__cell'],
        {
          [commonStyle['cell--shadow-right']]:
            col.leftLastFixedColumn && showShadow.showLeftFixedColumnShadow,
          [commonStyle['cell--shadow-left']]:
            col.rightFirstFixedColumn && showShadow.showRightFixedColumnShadow,
        },
      ]"
    >
      <template v-if="rootSlotKeys.has(col.key)">
        <slot name="rowCell" :column-key="col.key"></slot>
      </template>

      <template v-else>
        {{ record[col.key] }}
      </template>
    </td>
  </tr>

  <!-- expand row -->
  <EzTbodyExpandRow
    v-if="state.showExpandRow && rootProps.rowExpand?.expandCondition(record)"
    :record="record"
  >
    <slot name="rowExpand"></slot>
  </EzTbodyExpandRow>
</template>

<style lang="scss" module>
.normal-row {
  text-align: left;
  font-size: 14px;
  background-color: white;

  &:hover {
    background: #fafafa;
  }

  &.normal-row--selection {
    background: #e6f4ff;

    &:hover {
      background: #bae0ff;
    }
  }

  .normal-row__cell {
    word-wrap: break-word;
    box-sizing: border-box;
    position: relative;
    height: 50px;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    background: inherit;
  }

  .normal-row__expand-toggle-cell {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    .normal-row__expand-toggle-cell-icon {
      color: grey;
      cursor: pointer;

      &:hover {
        color: #409eff;
      }
    }
  }

  .normal-row__selection-toggle-cell {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
