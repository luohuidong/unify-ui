import { ref } from "vue";
import type { Ref } from "vue";
import { useInject } from "./useInject";

export function useHeaderResize(thRef: Ref<HTMLTableCellElement | undefined>, columnKey: string, minWidth: number) {
  let originBodyCursor = "";
  let beforeWidth = 0;
  const dragging = ref(false);
  const { tableProps, tableEmits } = useInject();

  function handleChangeColumnWidth(columnKey: string, width: number) {
    const column = tableProps.columns.find((item) => item.key === columnKey);
    if (!column) return;

    if (minWidth >= width && beforeWidth > width) return;
    column.width = width;
    tableEmits("update:columns", [...tableProps.columns]);
  }

  function handleMouseMove(e: MouseEvent) {
    requestAnimationFrame(() => {
      if (!thRef.value) return;

      const width = thRef.value.offsetWidth;
      const newWidth = width + e.movementX;

      handleChangeColumnWidth(columnKey, newWidth);
    });
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    dragging.value = false;
    document.body.style.cursor = originBodyCursor;
  }

  function handleMouseDown() {
    if (!thRef.value) return;

    beforeWidth = thRef.value.offsetWidth;
    dragging.value = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    originBodyCursor = document.body.style.cursor;
    document.body.style.cursor = "col-resize";
  }

  return {
    dragging,
    handleMouseDown,
  };
}
