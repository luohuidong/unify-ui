import { ref } from "vue";
import type { Ref } from "vue";
import { useInject } from "./useInject";

export function useHeaderResize(thRef: Ref<HTMLTableCellElement | undefined>, columnKey: string, minWidth: number) {
  let thOriginWidth = 0;
  let totalMovementX = 0;
  const dragging = ref(false);
  const { tableProps, tableEmits } = useInject();

  function handleChangeColumnWidth(columnKey: string, width: number) {
    const column = tableProps.columns.find((item) => item.key === columnKey);
    if (!column) return;

    if (minWidth >= width && thOriginWidth > width) return;
    column.width = width;
    tableEmits("update:columns", [...tableProps.columns]);
  }

  function handleMouseMove(e: MouseEvent) {
    requestAnimationFrame(() => {
      if (!thRef.value) return;

      totalMovementX += e.movementX;
      const newWidth = thOriginWidth + totalMovementX;

      handleChangeColumnWidth(columnKey, newWidth);
    });
  }

  function handleMouseUp() {
    dragging.value = false;
    document.body.style.cursor = "";
    totalMovementX = 0;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  function getCol() {
    if (!thRef.value) return;

    const table = thRef.value.parentElement?.parentElement?.parentElement;
    if (!table) return;

    const thIndex = thRef.value.cellIndex;
    const columns = table.getElementsByTagName("col");
    const col = columns[thIndex];

    return col;
  }

  function handleMouseDown() {
    if (!thRef.value) return;

    dragging.value = true;
    document.body.style.cursor = "col-resize";

    const col = getCol();
    thOriginWidth = col?.style.width ? parseFloat(col.style.width) : thRef.value.offsetWidth;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  return {
    dragging,
    handleMouseDown,
  };
}
