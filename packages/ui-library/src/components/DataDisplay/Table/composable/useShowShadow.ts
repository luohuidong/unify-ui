import {
  onMounted,
  onUnmounted,
  reactive,
  provide,
  type Ref,
  type ComputedRef,
  watchEffect,
} from "vue";
import { throttle } from "lodash-es";

import * as injectKeys from "../injectKeys";
import type { ShowShadow, ColumnData, TableProps } from "../types";

export function useShowShadow(params: {
  containerRef: Ref<HTMLDivElement | undefined>;
  tableRef: Ref<HTMLTableElement | undefined>;
  columnsData: ComputedRef<ColumnData[]>;
  tableProps: TableProps;
}) {
  const state: ShowShadow = reactive({
    showLeftFixedColumnShadow: false,
    showRightFixedColumnShadow: false,
    selectionColumnShadowVisible: false,
    expandColumnShadowVisible: false,
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

  watchEffect(() => {
    const firstColumnData = params.columnsData.value[0];

    // if user has defined some column fix to left, then hide selection column shadow
    if (firstColumnData.fixed === "left") {
      state.selectionColumnShadowVisible = false;
    } else {
      state.selectionColumnShadowVisible = state.showLeftFixedColumnShadow;
    }
  });

  watchEffect(() => {
    const firstColumnData = params.columnsData.value[0];

    // if user has defined some column fix to left, then hide expand column shadow
    // or if show selection column, then hide expand column shadow
    if (firstColumnData.fixed === "left" || params.tableProps.selection) {
      state.expandColumnShadowVisible = false;
    } else {
      state.expandColumnShadowVisible = state.showLeftFixedColumnShadow;
    }
  });
}
