import { ref, provide, watchEffect, type useSlots } from "vue";

import * as injectKeys from "../injectKeys";

export function useGetSlotKey(slots: ReturnType<typeof useSlots>) {
  const rootSlotKeys = ref(new Set<string>());
  provide(injectKeys.slotKeysKey, rootSlotKeys);
  watchEffect(() => {
    rootSlotKeys.value.clear();
    Reflect.ownKeys(slots).forEach((key) => rootSlotKeys.value.add(key as string));
  });
}
