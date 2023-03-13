import { ref, provide, watchEffect, type useSlots } from "vue";

import * as injectKeys from "../injectKeys";

export function useGetSlotKey(slots: ReturnType<typeof useSlots>) {
  const slotKeys = ref(new Set<string>());
  provide(injectKeys.slotKeysKey, slotKeys);
  watchEffect(() => {
    slotKeys.value.clear();
    Reflect.ownKeys(slots).forEach((key) => slotKeys.value.add(key as string));
  });
}
