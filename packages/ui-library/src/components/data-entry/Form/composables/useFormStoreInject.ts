import { inject } from "vue";

import { injectKey } from "./injectKeys";

export function useFormStoreInject() {
  return inject(injectKey);
}
