import type { SortType } from "../types";
import { useInject } from "./useInject";

export function useSortEmit() {
  const { rootEmit } = useInject();

  function handleSortEmit(params: { columnKey: string; order: SortType } | null) {
    rootEmit("update:sort", params);
    rootEmit("sortChange", params);
  }

  return {
    handleSortEmit,
  };
}
