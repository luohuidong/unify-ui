import type { Ref } from "vue";

export interface RootProps {
  placement: "top" | "bottom" | "left" | "right";
  overlayClassName?: string;
  /** Whether to show the arrow */
  showArrow?: boolean;
  trigger?: "hover" | "click" | "focus" | "controlled";
  /** Whether the popup is visible */
  visible?: boolean;
  /** Whether the popup is disabled */
  disabled?: boolean;
  /** Offset of the popup  */
  offset?: number;
}

export type RootEmits = (e: "update:visible", visible: boolean) => void;

export type ElementRef = Ref<HTMLElement | undefined>;
