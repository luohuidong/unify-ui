import { reactive, provide, computed } from "vue";

import type { Key, RootState, RootProps } from "../types";
import * as injectKeys from "../injectKeys";
import { expandColumnWidth } from "../constant";

export function useState(rootProps: RootProps) {
  const selectionColumnOffset = computed(() => (rootProps.rowExpand && expandColumnWidth) || 0);

  const state: RootState = reactive({
    selectedRowKeys: new Set<Key>(),
    selectionColumnOffset,
  });

  provide(injectKeys.rootStateKey, state);

  return {
    state,
  };
}
