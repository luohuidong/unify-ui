import { inject, type ComputedRef, type Ref } from "vue";

import * as injectKeys from "./injectKeys";
import type { RootProps, ColumnData, ShowShadow } from "./types";

export function useInject() {
  const rootProps = inject(injectKeys.rootPropsKey) as RootProps;
  const slotKeys = inject(injectKeys.slotKeysKey) as Ref<Set<string>>;
  const columnCount = inject(injectKeys.columnCount) as ComputedRef<number>;
  const columnsData = inject(injectKeys.columnsDataKey) as ComputedRef<ColumnData[]>;
  const showShadow = inject(injectKeys.shadowShow) as ShowShadow;
  return {
    rootProps,
    slotKeys,
    columnCount,
    columnsData,
    showShadow,
  };
}
