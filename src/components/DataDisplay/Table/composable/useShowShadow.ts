import { onMounted, onUnmounted, reactive, provide, type Ref } from "vue";
import { throttle } from "lodash-es";

import * as injectKeys from "../injectKeys";
import type { ShowShadow } from "../types";

export function useShowShadow(
  containerRef: Ref<HTMLDivElement | undefined>,
  tableRef: Ref<HTMLTableElement | undefined>
) {
  const state: ShowShadow = reactive({
    showLeftFixedColumnShadow: false,
    showRightFixedColumnShadow: false,
  });

  provide(injectKeys.shadowShow, state);

  onMounted(() => {
    const container = containerRef.value;
    const table = tableRef.value;
    if (!container || !table) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = table.clientWidth - container.clientWidth;
    state.showRightFixedColumnShadow = maxScrollLeft > scrollLeft;
  });

  function handleContainerScroll(e: Event) {
    const container = containerRef.value;
    const table = tableRef.value;

    if (!container || !table) return;

    const target = e.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;

    const maxScrollLeft = table.clientWidth - container.clientWidth;
    state.showRightFixedColumnShadow = maxScrollLeft > scrollLeft;
    state.showLeftFixedColumnShadow = maxScrollLeft > 0 && scrollLeft !== 0;
  }
  const throttleHandleContainerScroll = throttle(handleContainerScroll, 300);

  onMounted(() => {
    const container = containerRef.value;
    const table = tableRef.value;
    if (container && table) {
      container.addEventListener("scroll", throttleHandleContainerScroll);
    }
  });

  onUnmounted(() => {
    const container = containerRef.value;
    const table = tableRef.value;

    if (container && table) {
      container.removeEventListener("scroll", throttleHandleContainerScroll);
    }
  });
}