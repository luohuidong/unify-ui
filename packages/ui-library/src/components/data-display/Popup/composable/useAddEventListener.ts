import { onMounted, onUnmounted, watch } from "vue";
import type { RootProps, ElementRef } from "../types";

export function useAddEventListener({
  referenceRef,
  floatingRef,
  rootProps: props,
  showPopup,
  hidePopup,
}: {
  referenceRef: ElementRef;
  floatingRef: ElementRef;
  rootProps: RootProps;
  showPopup: () => void;
  hidePopup: () => void;
}) {
  // if trigger value is "click", when click outside of reference and floating, hide tooltip
  function handleBodyClick(e: MouseEvent) {
    const path = e.composedPath();

    const reference = referenceRef.value;
    const floating = floatingRef.value;
    if (!reference || !floating) return;
    if (!path.includes(reference) && !path.includes(floating)) {
      hidePopup();
    }
  }

  function handleAddEventListener() {
    const reference = referenceRef.value;
    if (!reference) return;

    if (props.trigger === "hover") {
      reference.addEventListener("mouseenter", showPopup);
      reference.addEventListener("mouseleave", hidePopup);
    }

    if (props.trigger === "click") {
      reference.addEventListener("click", showPopup);
      document.body.addEventListener("click", handleBodyClick);
    }
  }

  function handleRemoveEventListener() {
    const reference = referenceRef.value;
    if (!reference) return;

    reference.removeEventListener("focus", showPopup);
    reference.removeEventListener("blur", hidePopup);

    reference.removeEventListener("mouseenter", showPopup);
    reference.removeEventListener("mouseleave", hidePopup);

    reference.removeEventListener("click", showPopup);
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
