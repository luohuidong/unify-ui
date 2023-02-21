import { computed, provide } from "vue";

import type { RootProps, ColumnData } from "./types";
import * as injectKeys from "./injectKeys";

export function useGetColumnsData(columns: RootProps["columns"]) {
  const columnsData = computed(() => {
    const leftFixedColumns: ColumnData[] = [];
    let left = 0;

    const normalColumns: ColumnData[] = [];

    const rightFixedColumns: ColumnData[] = [];
    let right = 0;

    columns.forEach((item) => {
      if (item.fixed === "right") {
        rightFixedColumns.push({ ...item, right });
        right = right + (item.width ?? 0);
      } else if (item.fixed === "left") {
        leftFixedColumns.push({ ...item, left });
      } else {
        normalColumns.push(item);
      }
    });

    return [...leftFixedColumns, ...normalColumns, ...rightFixedColumns];
  });

  provide(injectKeys.columnsDataKey, columnsData);

  return columnsData;
}
