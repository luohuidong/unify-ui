import { inject, type ComputedRef, type Ref } from "vue";

import * as injectKeys from "./injectKeys";
import type { RootProps, ColumnData, ShowShadow, RootState } from "./types";

export function useInject() {
  const rootProps = inject(injectKeys.rootPropsKey) as RootProps;
  const slotKeys = inject(injectKeys.slotKeysKey) as Ref<Set<string>>;
  const columnCount = inject(injectKeys.columnCount) as ComputedRef<number>;
  const columnsData = inject(injectKeys.columnsDataKey) as ComputedRef<ColumnData[]>;
  const showShadow = inject(injectKeys.shadowShow) as ShowShadow;
  const rootState = inject(injectKeys.rootStateKey) as RootState;

  return {
    rootProps,
    slotKeys,
    columnCount,
    columnsData,
    showShadow,
    rootState,
  };
}
