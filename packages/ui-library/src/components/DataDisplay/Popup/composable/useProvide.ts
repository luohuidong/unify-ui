import { ref, provide } from "vue";
import * as provideKeys from "../provideKeys";
import type { RootProps, ElementRef } from "../types";

export function useProvide(rootProps: RootProps) {
  provide(provideKeys.rootPropsKey, rootProps);

  // trigger element container reference
  const referenceRef: ElementRef = ref();
  provide(provideKeys.referenceRefKey, {
    referenceRef,
  });

  // floating element reference
  const floatingRef: ElementRef = ref();
  function setFloatingRef(e: HTMLElement) {
    floatingRef.value = e;
  }
  provide(provideKeys.floatingRefKey, {
    floatingRef,
    setFloatingRef,
  });

  // floating element arrow reference
  const floatingArrowRef: ElementRef = ref();
  function setFloatingArrowRef(e: HTMLElement) {
    floatingArrowRef.value = e;
  }
  provide(provideKeys.floatingArrowRefKey, {
    floatingArrowRef,
    setFloatingArrowRef,
  });

  return {
    referenceRef,
    floatingRef,
    floatingArrowRef,
  };
}
