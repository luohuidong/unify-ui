import { computed, provide } from "vue";

import type { TableProps, TableState } from "../types";
import * as injectKeys from "../injectKeys";

export function useGetColumnCount(tableProps: TableProps, tableState: TableState) {
  const columnCount = computed(() => {
    let count = tableProps.columns.length;
    if (tableProps.selection) count++;
    if (tableProps.rowExpand && tableState.showExpandToggleCell) count++;
    return count;
  });
  provide(injectKeys.columnCount, columnCount);

  return columnCount;
}
