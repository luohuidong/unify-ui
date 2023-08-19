<script setup lang="ts">
import { useInject } from "./composables";
import type { Record } from "./types";
import commonStyle from "./commonStyle.module.scss";

import Add from "./icons/Add.vue";
import Minus from "./icons/Minus.vue";

defineProps<{
  record: Record;
  showExpandRow: boolean;
}>();

defineEmits<{
  (e: "icon-click"): void;
}>();

const { tableProps, columnsInfo } = useInject();
const { hasLeftFixedColumn } = columnsInfo;
</script>

<template>
  <td
    :class="[
      $style['cell'],
      {
        [$style['cell--sticky']]: hasLeftFixedColumn,
      },
      tableProps.tbodyCellClass,
    ]"
  >
    <div :class="[commonStyle['cell__inner'], commonStyle['cell__inner--horizontal-center']]">
      <component
        :is="showExpandRow ? Minus : Add"
        v-if="tableProps.rowExpand?.expandCondition(record)"
        :width="20"
        :height="20"
        :class="$style['cell__icon']"
        @click="$emit('icon-click')"
      ></component>
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
  left: 0;
}

.cell__icon {
  color: grey;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #409eff;
  }
}
</style>
