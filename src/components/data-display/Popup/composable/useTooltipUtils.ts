import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";
import type { RootProps, RootEmits, ElementRef } from "../types";

export function useTooltipUtils({
  referenceRef,
  floatingRef,
  floatingArrowRef,
  rootProps,
  rootEmits,
}: {
  referenceRef: ElementRef;
  floatingRef: ElementRef;
  floatingArrowRef: ElementRef;
  rootProps: RootProps;
  rootEmits: RootEmits;
}) {
  // upadte floating element's position and arrow's position
  function updatePosition() {
    const reference = referenceRef.value;
    const floating = floatingRef.value;
    const floatingArrow = floatingArrowRef.value;

    if (reference && floating && floatingArrow) {
      computePosition(reference, floating, {
        placement: rootProps.placement,
        middleware: [
          offset(rootProps.offset),
          flip(),
          shift({ padding: 5 }),
          arrow({ element: floatingArrow }),
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(floating.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        if (middlewareData.arrow) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow;

          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right",
          }[placement.split("-")[0]] as "top" | "right" | "bottom" | "left";

          Object.assign(floatingArrow.style, {
            left: arrowX != null ? `${arrowX}px` : "",
            top: arrowY != null ? `${arrowY}px` : "",
            right: "",
            bottom: "",
            [staticSide]: "-4px",
          });
        }
      });
    }
  }

  let cleanup: (() => void) | null = null;

  function showTooltip() {
    if (rootProps.disabled) return;

    const reference = referenceRef.value;
    const floating = floatingRef.value;

    if (reference && floating) {
      floating.style.display = "block";
      rootEmits?.("update:visible", true);
      cleanup = autoUpdate(reference, floating, updatePosition);
    }

    updatePosition();
  }

  function hideTooltip() {
    const reference = referenceRef.value;
    const floating = floatingRef.value;

    if (reference && floating) {
      floating.style.display = "";
      rootEmits?.("update:visible", false);
      cleanup && cleanup();
    }
  }

  return {
    showTooltip,
    hideTooltip,
  };
}
