import type { Ref } from "vue";

export interface RootProps {
  placement: "top" | "bottom" | "left" | "right";
  overlayClassName?: string;
  /** Whether to show the arrow */
  showArrow?: boolean;
  trigger?: "hover" | "click" | "controlled";
  /** Whether the popup is visible */
  visible?: boolean;
  /** Whether the popup is disabled */
  disabled?: boolean;
  /** Offset of the popup  */
  offset?: number;
  /** To enable the floating element to be appended to the body */
  appendToBody?: boolean;
}

export interface RootEmits {
  (e: "update:visible", visible: boolean): void;
}

export type ElementRef = Ref<HTMLElement | undefined>;
