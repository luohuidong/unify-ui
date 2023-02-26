import { reactive, provide } from "vue";

import type { Key, RootState } from "./types";
import * as injectKeys from "./injectKeys";

export function useState() {
  const state: RootState = reactive({
    selectedRowKeys: new Set<Key>(),
  });

  provide(injectKeys.rootStateKey, state);

  return {
    state,
  };
}
