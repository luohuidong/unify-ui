import { useInject } from "./useInject";
import type { Record, Key } from "../types";

export function useSelection() {
  const { rootProps, rootState, rootEmit } = useInject();

  function handleCheckboxChange(record: Record, checked: boolean) {
    const rowKey = record[rootProps.rowKey];
    if (checked) {
      rootState.selectedRowKeys.add(rowKey);
      rootProps.selectedRows?.set(rowKey, record);
    } else {
      rootState.selectedRowKeys.delete(record[rootProps.rowKey]);
      rootProps.selectedRows?.delete(rowKey);
    }

    rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
    rootEmit("select", { record, selected: checked });

    if (rootProps.selectedRows) {
      const selectedRows: Map<Key, Record> = new Map();
      const selectedRowsArr: Record[] = [];
      for (let [key, value] of rootProps.selectedRows) {
        selectedRows.set(key, value);
        selectedRowsArr.push(value);
      }

      rootEmit("update:selectedRows", selectedRows);
      rootEmit("selectedChange", {
        selectedRowKeys: [...rootState.selectedRowKeys],
        selectedRows: selectedRowsArr,
      });
    }
  }

  function handleRadioClick(record: Record) {
    rootState.selectedRowKeys.clear();
    rootState.selectedRowKeys.add(record[rootProps.rowKey]);

    rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
    rootEmit("select", { record, selected: true });
  }

  return {
    handleCheckboxChange,
    handleRadioClick,
  };
}
