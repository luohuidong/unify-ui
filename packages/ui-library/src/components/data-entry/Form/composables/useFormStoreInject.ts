import { inject } from "vue";

import { injectFormStoreKey } from "./injectKeys";

export function useFormStoreInject() {
  return inject(injectFormStoreKey);
}
