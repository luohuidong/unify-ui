import { reactive, provide, watchEffect } from "vue";

import type { TableState, TableProps } from "../types";
import * as injectKeys from "../injectKeys";
import { expandColumnWidth } from "../constant";

export function useState(tableProps: TableProps) {
  const state: TableState = reactive({
    showExpandToggleCell: false,
    selectionColumnOffset: 0,
  });

  watchEffect(() => {
    const rowExpand = tableProps.rowExpand;

    if (!rowExpand) {
      state.showExpandToggleCell = false;
      return;
    }

    const expandabledRowCount = tableProps.data.reduce((acc, item) => {
      if (rowExpand.expandCondition(item)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    state.showExpandToggleCell = !!expandabledRowCount;
  });

  watchEffect(() => {
    // Expand row toggle column and selection column coexist at the same time.
    if (state.showExpandToggleCell && tableProps.selection) {
      state.selectionColumnOffset = expandColumnWidth;
      return;
    }
    // Only the selection column is present.
    if (tableProps.selection && !state.showExpandToggleCell) {
      state.selectionColumnOffset = 0;
      return;
    }

    // Neither an expand row toggle column nor a selection column exists.
    state.selectionColumnOffset = 0;
  });

  provide(injectKeys.tableStateKey, state);

  return {
    state,
  };
}
