import type { Ref } from "vue";
export interface RootProps {
  placement: "top" | "bottom" | "left" | "right";
  appendToBody?: boolean;
  overlayClassName?: string;
  backgroundColor?: string;
  fontColor?: string;
  showArrow?: boolean;
  trigger?: "hover" | "click" | "focus" | "controlled";
  visible?: boolean;
}

export type RootEmits = (e: "update:visible", visible: boolean) => void;

export type ElementRef = Ref<HTMLElement | null>;
