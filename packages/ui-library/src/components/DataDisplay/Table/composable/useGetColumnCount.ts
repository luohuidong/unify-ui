import { computed, provide } from "vue";

import type { RootProps } from "../types";
import * as injectKeys from "../injectKeys";

export function useGetColumnCount(props: RootProps) {
  const columnCount = computed(() => {
    let count = props.columns.length;
    if (props.selection) count++;
    if (props.rowExpand) count++;
    return count;
  });
  provide(injectKeys.columnCount, columnCount);

  return columnCount;
}
