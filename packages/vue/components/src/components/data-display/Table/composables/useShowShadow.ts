import { onMounted, onUnmounted, reactive, provide, type Ref } from "vue";
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

  function getShadowState() {
    const container = params.containerRef.value;
    const table = params.tableRef.value;

    if (!container || !table) return;

    const scrollLeft = container.scrollLeft;

    const maxScrollLeft = table.clientWidth - container.clientWidth;
    // The difference in scaling ratios may result in a 1px discrepancy.
    state.showRightFixedColumnShadow = maxScrollLeft > scrollLeft + 1;
    state.showLeftFixedColumnShadow = maxScrollLeft > 0 && scrollLeft !== 0;
  }
  const throttleGetShadowState = throttle(getShadowState, 300);

  onMounted(() => {
    const container = params.containerRef.value;
    const table = params.tableRef.value;
    if (container && table) {
      container.addEventListener("scroll", throttleGetShadowState);
    }
  });
  onUnmounted(() => {
    const container = params.containerRef.value;
    const table = params.tableRef.value;

    if (container && table) {
      container.removeEventListener("scroll", throttleGetShadowState);
    }
  });

  const resizeObserver = new ResizeObserver(throttleGetShadowState);
  onMounted(() => {
    const container = params.containerRef.value;
    if (container) {
      resizeObserver.observe(container);
    }
  });
  onUnmounted(() => {
    const container = params.containerRef.value;
    if (container) {
      resizeObserver.unobserve(container);
    }
  });
}
