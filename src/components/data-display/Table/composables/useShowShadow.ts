import { onMounted, onUnmounted, reactive, provide, type Ref, type ComputedRef, watchEffect } from "vue";
import { throttle } from "lodash-es";

import * as injectKeys from "../injectKeys";
import type { ShowShadow, ColumnsInfo, TableProps } from "../types";

export function useShowShadow(params: {
  containerRef: Ref<HTMLDivElement | undefined>;
  tableRef: Ref<HTMLTableElement | undefined>;
  columnsInfo: ColumnsInfo;
  tableProps: TableProps;
}) {
  const state: ShowShadow = reactive({
    showLeftFixedColumnShadow: false,
    showRightFixedColumnShadow: false,
  });

  provide(injectKeys.shadowShow, state);

  onMounted(() => {
    const container = params.containerRef.value;
    const table = params.tableRef.value;
    if (!container || !table) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = table.clientWidth - container.clientWidth;
    state.showRightFixedColumnShadow = maxScrollLeft > scrollLeft;
  });

  function handleContainerScroll(e: Event) {
    const container = params.containerRef.value;
    const table = params.tableRef.value;

    if (!container || !table) return;

    const target = e.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;

    const maxScrollLeft = table.clientWidth - container.clientWidth;
    state.showRightFixedColumnShadow = maxScrollLeft > scrollLeft;
    state.showLeftFixedColumnShadow = maxScrollLeft > 0 && scrollLeft !== 0;
  }
  const throttleHandleContainerScroll = throttle(handleContainerScroll, 300);

  onMounted(() => {
    const container = params.containerRef.value;
    const table = params.tableRef.value;
    if (container && table) {
      container.addEventListener("scroll", throttleHandleContainerScroll);
    }
  });

  onUnmounted(() => {
    const container = params.containerRef.value;
    const table = params.tableRef.value;

    if (container && table) {
      container.removeEventListener("scroll", throttleHandleContainerScroll);
    }
  });
}
