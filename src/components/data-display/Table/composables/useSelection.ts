import { useInject } from "./useInject";
import type { Record, Key } from "../types";

export function useSelection() {
  const { tableProps, tableEmits } = useInject();

  function handleCheckboxChange(record: Record, checked: boolean) {
    const rowKey = record[tableProps.rowKey];

    const newSelectedRowKeys = new Set(tableProps.selectedRowKeys);
    checked ? newSelectedRowKeys.add(rowKey) : newSelectedRowKeys.delete(rowKey);

    tableEmits("update:selectedRowKeys", newSelectedRowKeys);
    tableEmits("select", { selected: checked, rowKey, record });
  }

  function handleRadioClick(record: Record) {
    const rowKey = record[tableProps.rowKey] as Key;

    const newSelectedRowKeys = new Set<Key>([rowKey]);

    tableEmits("update:selectedRowKeys", newSelectedRowKeys);
    tableEmits("select", { selected: true, rowKey, record });
  }

  return {
    handleCheckboxChange,
    handleRadioClick,
  };
}
