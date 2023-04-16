import { useInject } from "./useInject";
import type { Record } from "../types";

export function useSelection() {
  const { rootProps, rootState, rootEmit } = useInject();

  function handleCheckboxChange(record: Record, checked: boolean) {
    const rowKey = record[rootProps.rowKey];

    checked ? rootState.selectedRowKeys.add(rowKey) : rootState.selectedRowKeys.delete(rowKey);

    rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
    rootEmit("select", { selected: checked, rowKey, record });
  }

  function handleRadioClick(record: Record) {
    const rowKey = record[rootProps.rowKey];
    rootState.selectedRowKeys.clear();
    rootState.selectedRowKeys.add(rowKey);

    rootEmit("update:selectedRowKeys", new Set([...rootState.selectedRowKeys]));
    rootEmit("select", { selected: true, rowKey, record });
  }

  return {
    handleCheckboxChange,
    handleRadioClick,
  };
}
