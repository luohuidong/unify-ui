import { inject, type ComputedRef, type Ref } from "vue";

import * as injectKeys from "../injectKeys";
import type { TableProps, ColumnData, ShowShadow, TableState, TableEmits } from "../types";

export function useInject() {
  const tableProps = inject(injectKeys.tablePropsKey) as TableProps;
  const tableState = inject(injectKeys.tableStateKey) as TableState;
  const tableEmits = inject(injectKeys.tableEmitsKey) as TableEmits;
  const rootSlotKeys = inject(injectKeys.slotKeysKey) as Ref<Set<string>>;
  const columnCount = inject(injectKeys.columnCount) as ComputedRef<number>;
  const columnsData = inject(injectKeys.columnsDataKey) as ComputedRef<ColumnData[]>;
  const showShadow = inject(injectKeys.shadowShow) as ShowShadow;

  const rootContainerRef = inject(injectKeys.containerRefKey) as Ref<HTMLElement | undefined>;
  const tableRefKey = inject(injectKeys.tableRefKey) as Ref<HTMLElement | undefined>;

  return {
    tableProps,
    tableState,
    tableEmits,
    rootSlotKeys,
    columnCount,
    columnsData,
    showShadow,
    rootContainerRef,
    tableRefKey,
  };
}
