import { useInject } from "./useInject";
import type { Record } from "../types";

export function useSelection() {
  const { tableProps, tableState, tableEmits } = useInject();

  function handleCheckboxChange(record: Record, checked: boolean) {
    const rowKey = record[tableProps.rowKey];

    checked ? tableState.selectedRowKeys.add(rowKey) : tableState.selectedRowKeys.delete(rowKey);

    tableEmits("update:selectedRowKeys", new Set([...tableState.selectedRowKeys]));
    tableEmits("select", { selected: checked, rowKey, record });
  }

  function handleRadioClick(record: Record) {
    const rowKey = record[tableProps.rowKey];
    tableState.selectedRowKeys.clear();
    tableState.selectedRowKeys.add(rowKey);

    tableEmits("update:selectedRowKeys", new Set([...tableState.selectedRowKeys]));
    tableEmits("select", { selected: true, rowKey, record });
  }

  return {
    handleCheckboxChange,
    handleRadioClick,
  };
}
