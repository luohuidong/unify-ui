<script setup lang="ts">
import { reactive } from "vue";

import { useInject } from "./useInject";
import type { Record } from "./types";
import commonStyle from "./commonStyle.module.scss";
import { expandColumnWidth } from "./constant";
import { useSelection } from "./useSelection";

import { EzCheckbox } from "@/components";
import Add from "./icons/Add.vue";
import Minus from "./icons/Minus.vue";

defineProps<{
  record: Record;
}>();

const { rootProps, columnsData, slotKeys, columnCount, showShadow, rootState } = useInject();
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
  <tr :class="$style.normalRow">
    <!-- expand column cell -->
    <td
      v-if="rootProps.rowExpand"
      :style="{ width: expandColumnWidth + 'px' }"
      :class="$style.expandColumnCell"
    >
      <div v-if="rootProps.rowExpand?.expandCondition(record)">
        <Minus
          v-if="state.showExpandRow"
          :width="20"
          :height="20"
          :class="$style.icon"
          @click="toggleExpandRow"
        ></Minus>
        <Add v-else :width="20" :height="20" :class="$style.icon" @click="toggleExpandRow"> </Add>
      </div>
    </td>

    <!-- selection column cell -->
    <td v-if="rootProps.selection?.type" :class="$style.selectionCell">
      <div v-if="rootProps.selection?.type === 'multiple'">
        <EzCheckbox
          :model-value="rootState.selectedRowKeys.has(record[rootProps.rowKey])"
          :disabled="rootProps.selection?.disabledCondition?.(record)"
          @change="(checked) => handleCheckboxChange(record, checked)"
        ></EzCheckbox>
      </div>
      <div v-else>
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
          <slot name="rowCell" :column-key="col.key"></slot>
        </template>

        <template v-else>
          {{ record[col.key] }}
        </template>
      </div>
    </td>
  </tr>

  <!-- expand row -->
  <tr v-show="state.showExpandRow && rootProps.rowExpand?.expandCondition(record)">
    <td :colspan="columnCount" :class="$style.expandRowCell" :style="{ padding: '16px' }">
      <slot name="rowExpand"></slot>
    </td>
  </tr>
</template>

<style lang="scss" module>
.normalRow {
  white-space: nowrap;
  text-align: left;
  font-size: 14px;

  .cell {
    position: relative;
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
    background: white;
  }

  .expandColumnCell {
    position: sticky;
    top: 0;
    height: 50px;
    left: 0;
    z-index: 1;
    border-bottom: 1px solid #f0f0f0;

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: white;
    }

    .icon {
      color: grey;
      cursor: pointer;

      &:hover {
        color: #409eff;
      }
    }
  }

  .selectionCell {
    position: sticky;
    top: 0;
    height: 50px;
    left: 0;
    z-index: 1;

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: white;
    }
  }
}

.expandRowCell {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  background: white;
}
</style>
