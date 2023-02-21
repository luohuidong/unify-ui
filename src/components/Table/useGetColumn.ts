import { computed } from "vue";
import type { RootProps } from "./types";

export function useGetColumn(columns: RootProps["columns"]) {
  const rightFixedColumns = computed(() => {
    const tmpColumns: (RootProps["columns"][number] & { right: number })[] = [];
    let right = 0;
    columns.forEach((item) => {
      if (item.fixed === "right") {
        tmpColumns.push({ ...item, right });
        right = right + (item.width ?? 0);
      }
    });
    return rightFixedColumns;
  });

  const leftFixedColumns = computed(() => {
    const tmpColumns: (RootProps["columns"][number] & { left: number })[] = [];
    let left = 0;
    columns.forEach((item) => {
      if (item.fixed === "left") {
        tmpColumns.push({ ...item, left });
        left = left + (item.width ?? 0);
      }
    });
    return tmpColumns;
  });

  const normalColumns = computed(() => columns.filter((item) => !item.fixed));

  return {
    rightFixedColumns,
    leftFixedColumns,
    normalColumns,
  };
}
