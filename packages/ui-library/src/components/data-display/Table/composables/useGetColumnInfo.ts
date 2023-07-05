import { computed, provide } from "vue";

import type { TableProps, ColumnData, TableState, ColumnsInfo } from "../types";
import * as injectKeys from "../injectKeys";
import { selectionColumnWidth, expandColumnWidth } from "../constant";

export function useGetColumnsInfo(tableProps: TableProps, tableState: TableState): ColumnsInfo {
  const columnsData = computed(() => {
    const leftFixedColumns: ColumnData[] = [];
    let left = 0;
    if (tableProps.selection) left += selectionColumnWidth;
    if (tableState.showExpandToggleCell) left += expandColumnWidth;

    const normalColumns: ColumnData[] = [];

    const rightFixedColumns: ColumnData[] = [];
    let right = 0;

    tableProps.columns.forEach((item) => {
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

  const columnCount = computed(() => {
    let count = tableProps.columns.length;
    if (tableProps.selection) count++;
    if (tableProps.rowExpand && tableState.showExpandToggleCell) count++;
    return count;
  });

  const hasLeftFixedColumn = computed(() => {
    return columnsData.value.some((item) => item.fixed === "left");
  });

  provide(injectKeys.columnsInfoKey, {
    columnCount,
    columnsData,
  });

  return {
    columnsData,
    columnCount,
  };
}
