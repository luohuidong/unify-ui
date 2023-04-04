import type { InjectionKey, Ref } from "vue";
import type { RootProps, RootEmits } from "./types";

export const rootPropsKey = Symbol("rootPropsKey") as InjectionKey<RootProps>;

export const referenceRefKey = Symbol("referenceRefKey") as InjectionKey<{
  referenceRef: Ref<Element | null>;
}>;

export const floatingRefKey = Symbol("floatingRefKey") as InjectionKey<{
  floatingRef: Ref<HTMLElement | null>;
  setFloatingRef: (e: HTMLElement) => void;
}>;

export const floatingArrowRefKey = Symbol("floatingArrowRefKey") as InjectionKey<{
  floatingArrowRef: Ref<HTMLElement | null>;
  setFloatingArrowRef: (e: HTMLElement) => void;
}>;
