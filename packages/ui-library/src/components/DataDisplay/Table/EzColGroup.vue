<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { throttle } from "lodash-es";

import { useInject } from "./composable";
import { expandColumnWidth, selectionColumnWidth } from "./constant";

const { tableProps, columnsData, rootContainerRef, tableState } = useInject();

const isAllColumnDefinedWidth = computed(() => {
  return columnsData.value.every((col) => col.width);
});

const totalColumnDefinedWidth = computed(() => {
  return tableProps.columns.reduce((acc, col) => {
    return acc + (col.width || 0);
  }, 0);
});

const shouldSetNotFixedColumnWidthToAuto = ref(false);
function handleResize() {
  if (
    isAllColumnDefinedWidth.value &&
    (rootContainerRef.value?.clientWidth || 0) > totalColumnDefinedWidth.value
  ) {
    shouldSetNotFixedColumnWidthToAuto.value = true;
  } else {
    shouldSetNotFixedColumnWidthToAuto.value = false;
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
      :style="{ width: shouldSetNotFixedColumnWidthToAuto ? 'auto' : `${col.width}px` }"
      class="column"
    />
  </colgroup>
</template>

<style lang="scss" scoped>
.column {
  box-sizing: border-box;
}
</style>
