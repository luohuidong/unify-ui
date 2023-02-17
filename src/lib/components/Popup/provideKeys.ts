import type { InjectionKey, Ref } from "vue";

export const rootPropsKey = Symbol() as InjectionKey<{
  placement: "top" | "bottom" | "left" | "right";
  appendToBody?: boolean;
  overlayClassName?: string;
  fontColor?: string;
  backgroundColor?: string;
  showArrow?: boolean;
  trigger?: "hover" | "click";
}>;

export const referenceRefKey = Symbol() as InjectionKey<{
  referenceRef: Ref<Element | null>;
}>;

export const floatingRefKey = Symbol() as InjectionKey<{
  floatingRef: Ref<HTMLElement | null>;
  setFloatingRef: (e: HTMLElement) => void;
}>;

export const floatingArrowRefKey = Symbol() as InjectionKey<{
  floatingArrowRef: Ref<HTMLElement | null>;
  setFloatingArrowRef: (e: HTMLElement) => void;
}>;
