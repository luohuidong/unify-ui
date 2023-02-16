import type { InjectionKey, Ref } from "vue";

export const rootPropsKey = Symbol() as InjectionKey<{
  overlayPlacement: "top" | "bottom" | "left" | "right";
  overlayAppendToBody?: boolean;
  overlayClassName?: string;
  overlayFontColor?: string;
  overlayBackgroundColor?: string;
  overlayBackgroundShowArrow?: boolean;
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
