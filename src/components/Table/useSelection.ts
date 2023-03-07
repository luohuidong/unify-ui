import { useInject } from "./useInject";
import type { Record } from "./types";

export function useSelection() {
  const { rootProps, rootState, rootEmit } = useInject();

  function handleCheckboxChange(record: Record, checked: boolean) {
    checked
      ? rootState.selectedRowKeys.add(record[rootProps.rowKey])
      : rootState.selectedRowKeys.delete(record[rootProps.rowKey]);

    rootEmit("update:selectedRowKeys", rootState.selectedRowKeys);
    rootEmit("select", { record, selected: checked });
  }

  function handleRadioClick(record: Record) {
    rootState.selectedRowKeys.clear();
    rootState.selectedRowKeys.add(record[rootProps.rowKey]);

    rootEmit("update:selectedRowKeys", rootState.selectedRowKeys);
    rootEmit("select", { record, selected: true });
  }

  return {
    handleCheckboxChange,
    handleRadioClick,
  };
}
