import { computed, provide } from "vue";

import type { TableProps } from "../types";
import * as injectKeys from "../injectKeys";

export function useGetColumnCount(tableProps: TableProps) {
  const columnCount = computed(() => {
    let count = tableProps.columns.length;
    if (tableProps.selection) count++;
    if (tableProps.rowExpand) count++;
    return count;
  });
  provide(injectKeys.columnCount, columnCount);

  return columnCount;
}
