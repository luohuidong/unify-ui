import { reactive, provide, computed, watchEffect } from "vue";

import type { Key, RootState, RootProps } from "../types";
import * as injectKeys from "../injectKeys";

export function useState(rootProps: RootProps) {
  const state: RootState = reactive({
    selectedRowKeys: new Set<Key>(),
    showExpandToggleCell: false,
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

  provide(injectKeys.rootStateKey, state);

  return {
    state,
  };
}
