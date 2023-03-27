import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";
import { inject, Ref } from "vue";
import type { RootProps } from "../types";
import * as provideKeys from "../provideKeys";

type ElementRef = Ref<HTMLElement | null>;

export function useTooltipUtils({
  referenceRef,
  floatingRef,
  floatingArrowRef,
  rootProps: props,
}: {
  referenceRef: ElementRef;
  floatingRef: ElementRef;
  floatingArrowRef: ElementRef;
  rootProps: RootProps;
}) {
  const rootEmits = inject(provideKeys.rootEmitsKey);

  // upadte floating element's position and arrow's position
  function updatePosition() {
    const reference = referenceRef.value;
    const floating = floatingRef.value;
    const floatingArrow = floatingArrowRef.value;

    if (reference && floating && floatingArrow) {
      computePosition(reference, floating, {
        placement: props.placement,
        middleware: [offset(6), flip(), shift({ padding: 5 }), arrow({ element: floatingArrow })],
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
