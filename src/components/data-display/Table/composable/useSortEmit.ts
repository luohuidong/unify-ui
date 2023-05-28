import type { SortType } from "../types";
import { useInject } from "./useInject";

export function useSortEmit() {
  const { tableEmits } = useInject();

  function handleSortEmit(params: { columnKey: string; order: SortType } | null) {
    tableEmits("update:sort", params);
    tableEmits("sortChange", params);
  }

  return {
    handleSortEmit,
  };
}
