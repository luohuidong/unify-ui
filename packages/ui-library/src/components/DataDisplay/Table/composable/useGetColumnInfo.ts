import { computed, provide, type ComputedRef } from "vue";

import type { RootProps, ColumnData, RootState } from "../types";
import * as injectKeys from "../injectKeys";
import { selectionColumnWidth, expandColumnWidth } from "../constant";

export function useGetColumnsInfo(
  props: RootProps,
  rootState: RootState
): { columnsData: ComputedRef<ColumnData[]> } {
  const columnsData = computed(() => {
    const leftFixedColumns: ColumnData[] = [];
    let left = 0;
    if (props.selection) left += selectionColumnWidth;
    if (rootState.showExpandToggleCell) left += expandColumnWidth;

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

  return {
    columnsData,
  };
}
