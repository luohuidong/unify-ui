import { computed, provide } from "vue";

import type { RootProps, ColumnData } from "./types";
import * as injectKeys from "./injectKeys";
import { selectionColumnWidth } from "./constant";

export function useGetColumnsData(props: RootProps) {
  const columnsData = computed(() => {
    const leftFixedColumns: ColumnData[] = [];
    let left = props.selection ? selectionColumnWidth : 0;

    const normalColumns: ColumnData[] = [];

    const rightFixedColumns: ColumnData[] = [];
    let right = 0;

    props.columns.forEach((item) => {
      if (item.fixed === "right") {
        rightFixedColumns.push({ ...item, rightOffset: right });
        right = right + (item.width ?? 0);
      } else if (item.fixed === "left") {
        leftFixedColumns.push({ ...item, leftOffset: left });
      } else {
        normalColumns.push(item);
      }
    });

    if (leftFixedColumns.length > 0) {
      leftFixedColumns[leftFixedColumns.length - 1].leftLastFixedColumn = true;
    }
    if (rightFixedColumns.length > 0) {
      rightFixedColumns[0].rightFirstFixedColumn = true;
    }

    return [...leftFixedColumns, ...normalColumns, ...rightFixedColumns];
  });

  provide(injectKeys.columnsDataKey, columnsData);

  return columnsData;
}
