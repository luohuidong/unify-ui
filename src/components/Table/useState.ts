import { reactive, provide } from "vue";

import type { Key, Record, RootState } from "./types";
import * as injectKeys from "./injectKeys";

export function useState() {
  const state: RootState = reactive({
    selectedRowKeys: new Set<Key>(),
    selectedRows: new Map<Key, Record>(),
  });

  provide(injectKeys.rootStateKey, state);

  return {
    state,
  };
}
