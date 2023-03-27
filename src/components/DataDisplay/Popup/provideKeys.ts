import type { InjectionKey, Ref } from "vue";
import type { RootProps, RootEmits } from "./types";

export const rootPropsKey = Symbol() as InjectionKey<RootProps>;

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

export const rootEmitsKey = Symbol() as InjectionKey<RootEmits>;
