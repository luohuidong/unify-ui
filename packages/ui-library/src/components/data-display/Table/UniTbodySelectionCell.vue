<script setup lang="ts">
import { computed } from "vue";

import { UniCheckbox, UniRadio } from "@/components";
import { useInject, useSelection } from "./composables";
import type { Record } from "./types";
import commonStyle from "./commonStyle.module.scss";

defineProps<{
  record: Record;
}>();

const {
  tableProps,
  columnsInfo: { hasLeftFixedColumn },
  tableState,
} = useInject();
const { handleCheckboxChange, handleRadioClick } = useSelection();

const selectionColumnOffset = computed(() => tableState.selectionColumnOffset + "px");
</script>

<template>
  <td
    v-if="tableProps.selection?.type"
    :class="[
      $style['cell'],
      {
        [$style['cell--sticky']]: hasLeftFixedColumn,
      },
      tableProps.tbodyCellClass,
    ]"
  >
    <div :class="[commonStyle['cell__inner'], commonStyle['cell__inner--horizontal-center']]">
      <UniCheckbox
        v-if="tableProps.selection?.type === 'multiple'"
        :checked="tableProps.selectedRowKeys?.has(record[tableProps.rowKey])"
        :disabled="tableProps.selection?.disabledCondition?.(record)"
        @change="(checked: boolean) => handleCheckboxChange(record, checked)"
      />

      <UniRadio
        v-else
        name="unitable-single-selection"
        :value="record[tableProps.rowKey]"
        :checked="tableProps.selectedRowKeys?.has(record[tableProps.rowKey])"
        :disabled="tableProps.selection?.disabledCondition?.(record)"
        @change="() => handleRadioClick(record)"
      />
    </div>
  </td>
</template>

<style lang="scss" module>
@use "./styles/tbody";

.cell {
  @include tbody.cell;
  z-index: 1;
}

.cell--sticky {
  position: sticky;
  left: v-bind(selectionColumnOffset);
}
</style>
