import type { InjectionKey } from "vue";
import type { RootProps, ElementRef } from "./types";

export const rootPropsKey = Symbol("rootPropsKey") as InjectionKey<RootProps>;

export const referenceRefKey = Symbol("referenceRefKey") as InjectionKey<{
  referenceRef: ElementRef;
}>;

export const floatingRefKey = Symbol("floatingRefKey") as InjectionKey<{
  floatingRef: ElementRef;
  setFloatingRef: (e: HTMLElement) => void;
}>;

export const floatingArrowRefKey = Symbol("floatingArrowRefKey") as InjectionKey<{
  floatingArrowRef: ElementRef;
  setFloatingArrowRef: (e: HTMLElement) => void;
}>;
