import { reactive, provide, watchEffect } from "vue";

import type { Key, RootState, RootProps } from "../types";
import * as injectKeys from "../injectKeys";
import { expandColumnWidth } from "../constant";

export function useState(rootProps: RootProps) {
  const state: RootState = reactive({
    selectedRowKeys: new Set<Key>(),
    showExpandToggleCell: false,
    selectionColumnOffset: 0,
  });

  watchEffect(() => {
    const rowExpand = rootProps.rowExpand;

    if (!rowExpand) {
      state.showExpandToggleCell = false;
      return;
    }

    const expandabledRowCount = rootProps.data.reduce((acc, item) => {
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
    if (state.showExpandToggleCell && rootProps.selection) {
      state.selectionColumnOffset = expandColumnWidth;
      return;
    }
    // Only the selection column is present.
    if (rootProps.selection && !state.showExpandToggleCell) {
      state.selectionColumnOffset = 0;
      return;
    }

    // Neither an expand row toggle column nor a selection column exists.
    state.selectionColumnOffset = 0;
  });

  provide(injectKeys.rootStateKey, state);

  return {
    state,
  };
}
