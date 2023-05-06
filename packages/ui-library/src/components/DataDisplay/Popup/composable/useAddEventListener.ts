import { onMounted, onUnmounted, watch } from "vue";
import type { RootProps, ElementRef } from "../types";

export function useAddEventListener({
  referenceRef,
  floatingRef,
  rootProps: props,
  showTooltip,
  hideTooltip,
}: {
  referenceRef: ElementRef;
  floatingRef: ElementRef;
  rootProps: RootProps;
  showTooltip: () => void;
  hideTooltip: () => void;
}) {
  // if trigger value is "click", when click outside of reference and floating, hide tooltip
  function handleBodyClick(e: MouseEvent) {
    const path = e.composedPath();

    const reference = referenceRef.value;
    const floating = floatingRef.value;
    if (!reference || !floating) return;
    if (!path.includes(reference) && !path.includes(floating)) {
      hideTooltip();
    }
  }

  function handleAddEventListener() {
    const reference = referenceRef.value;
    if (!reference) return;

    if (props.trigger === "focus") {
      reference.addEventListener("focus", showTooltip);
      reference.addEventListener("blur", hideTooltip);
    }

    if (props.trigger === "hover") {
      reference.addEventListener("mouseenter", showTooltip);
      reference.addEventListener("mouseleave", hideTooltip);
    }

    if (props.trigger === "click") {
      reference.addEventListener("click", showTooltip);
      document.body.addEventListener("click", handleBodyClick);
    }
  }

  function handleRemoveEventListener() {
    const reference = referenceRef.value;
    if (!reference) return;

    reference.removeEventListener("focus", showTooltip);
    reference.removeEventListener("blur", hideTooltip);

    reference.removeEventListener("mouseenter", showTooltip);
    reference.removeEventListener("mouseleave", hideTooltip);

    reference.removeEventListener("click", showTooltip);
    document.body.removeEventListener("click", handleBodyClick);
  }

  onMounted(() => {
    handleAddEventListener();
  });

  onUnmounted(() => {
    handleRemoveEventListener();
  });

  // rebind event listener when trigger prop changes
  watch(
    () => props.trigger,
    () => {
      handleRemoveEventListener();
      handleAddEventListener();
    }
  );
}
