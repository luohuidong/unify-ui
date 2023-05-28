import { watch } from "vue";
import { TableEmits, TableProps } from "../types";
import { Key } from "../types";

export function useWatchData(tableProps: TableProps, tableEmits: TableEmits) {
  watch(
    () => tableProps.data,
    (newValue) => {
      if (!tableProps.selection) return;

      const dataIds = new Set<Key>();
      newValue.forEach((item) => {
        dataIds.add(item[tableProps.rowKey]);
      });

      const newSelectedRowKeys = new Set<Key>(tableProps.selectedRowKeys);
      for (const key of newSelectedRowKeys) {
        if (!dataIds.has(key)) {
          newSelectedRowKeys.delete(key);
        }
      }
      if (newSelectedRowKeys.size === tableProps.selectedRowKeys.size) return;
      tableEmits("update:selectedRowKeys", newSelectedRowKeys);
    },
    {
      deep: true,
    }
  );
}
