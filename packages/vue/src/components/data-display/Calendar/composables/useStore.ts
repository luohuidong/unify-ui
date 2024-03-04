import { inject } from "vue";

import { storeKeys } from "../injectKeys";
import type { Store } from "../types";

export function useStore() {
  return inject(storeKeys) as Store;
}
