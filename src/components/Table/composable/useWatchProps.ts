import { watch } from "vue";

import type { RootProps, RootState } from "../types";
import { SetUtils } from "../utils";

export function useWatchProps(props: RootProps, state: RootState) {
  watch(
    () => props.selectedRowKeys,
    (value) => {
      // clear state selectedRowKeys if props.selectedRowKeys is undefined
      if (!value) {
        state.selectedRowKeys.clear();
        return;
      }

      // set props.selectedRowKeys to state.selectedRowKeys if they are not equal.
      if (!SetUtils.equal(value, state.selectedRowKeys)) {
        state.selectedRowKeys = value;
      }
    }
  );
}
