import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";
import type { Store } from "../types";

export function useDocumentClick({
  triggerRef,
  optionsRef,
  state,
}: {
  triggerRef: Ref<HTMLSpanElement | undefined>;
  optionsRef: Ref<HTMLUListElement | undefined>;
  state: Store["state"];
}) {
  function handleDocumentClick(e: MouseEvent) {
    if (!triggerRef.value || !optionsRef.value) return;

    const path = e.composedPath();
    if (!path.includes(triggerRef.value) && !path.includes(optionsRef.value)) {
      state.popupVisible = false;
    }
  }
  onMounted(() => {
    document.addEventListener("click", handleDocumentClick);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleDocumentClick);
  });
}
