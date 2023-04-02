import { inject, type ComputedRef, type Ref } from "vue";

import * as injectKeys from "../injectKeys";
import type { RootProps, ColumnData, ShowShadow, RootState, RootEmit } from "../types";

export function useInject() {
  const rootProps = inject(injectKeys.rootPropsKey) as RootProps;
  const rootState = inject(injectKeys.rootStateKey) as RootState;
  const rootEmit = inject(injectKeys.rootEmitKey) as RootEmit;
  const rootSlotKeys = inject(injectKeys.slotKeysKey) as Ref<Set<string>>;
  const columnCount = inject(injectKeys.columnCount) as ComputedRef<number>;
  const columnsData = inject(injectKeys.columnsDataKey) as ComputedRef<ColumnData[]>;
  const showShadow = inject(injectKeys.shadowShow) as ShowShadow;

  const rootContainerRef = inject(injectKeys.containerRefKey) as Ref<HTMLElement | undefined>;
  const tableRefKey = inject(injectKeys.tableRefKey) as Ref<HTMLElement | undefined>;

  return {
    rootProps,
    rootState,
    rootEmit,
    rootSlotKeys,
    columnCount,
    columnsData,
    showShadow,
    rootContainerRef,
    tableRefKey,
  };
}
