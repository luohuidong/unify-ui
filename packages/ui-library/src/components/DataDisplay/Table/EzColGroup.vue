<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { throttle } from "lodash-es";

import { useInject } from "./composable";
import { expandColumnWidth, selectionColumnWidth } from "./constant";
import type { Column } from "./types";

const { tableProps, columnsData, rootContainerRef, tableState } = useInject();

const isAllColumnDefinedWidth = computed(() => {
  return columnsData.value.every((col) => col.width);
});

const totalColumnDefinedWidth = computed(() => {
  return tableProps.columns.reduce((acc, col) => {
    return acc + (col.width || 0);
  }, 0);
});

const shouldSetLastNotFixedColumnWidthToAuto = ref(false);
function handleResize() {
  if (
    isAllColumnDefinedWidth.value &&
    (rootContainerRef.value?.clientWidth || 0) > totalColumnDefinedWidth.value
  ) {
    shouldSetLastNotFixedColumnWidthToAuto.value = true;
  } else {
    shouldSetLastNotFixedColumnWidthToAuto.value = false;
  }
}

const throttleHandleResize = throttle(handleResize, 500);

onMounted(() => {
  const rootContainer = rootContainerRef.value;
  if (!rootContainer) return;

  const resizeObserver = new ResizeObserver(throttleHandleResize);

  // Start observing the element
  resizeObserver.observe(rootContainer);
});

const lastNotFixedColumn = computed(() => {
  return columnsData.value
    .slice()
    .reverse()
    .find((col) => !col.fixed);
});

function getColumnWidth(col: Column) {
  const width = "auto";

  // If all columns have defined `width` and the root container width is larger than the sum of all
  // columns' widths, then the width of the last non-fixed column will be set to auto.
  if (shouldSetLastNotFixedColumnWidthToAuto.value && col === lastNotFixedColumn.value) {
    return width;
  }

  if (col.width) {
    return `${col.width}px`;
  }

  return width;
}
</script>

<template>
  <colgroup>
    <template v-if="tableState.showExpandToggleCell">
      <col :style="{ width: `${expandColumnWidth}px` }" class="column" />
    </template>

    <template v-if="tableProps.selection?.type">
      <col :style="{ width: `${selectionColumnWidth}px` }" class="column" />
    </template>

    <col
      v-for="col in columnsData"
      :key="col.key"
      :style="{ width: getColumnWidth(col) }"
      class="column"
    />
  </colgroup>
</template>

<style lang="scss" scoped>
.column {
  box-sizing: border-box;
}
</style>
