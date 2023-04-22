import { watch } from "vue";

import type { TableProps, TableState } from "../types";
import { SetUtils } from "../utils";

export function useWatchProps(tableProps: TableProps, tableState: TableState) {
  watch(
    () => tableProps.selectedRowKeys,
    (value) => {
      // clear state selectedRowKeys if props.selectedRowKeys is undefined
      if (!value) {
        tableState.selectedRowKeys.clear();
        return;
      }

      // set props.selectedRowKeys to state.selectedRowKeys if they are not equal.
      if (!SetUtils.equal(value, tableState.selectedRowKeys)) {
        tableState.selectedRowKeys = value;
      }
    }
  );
}
