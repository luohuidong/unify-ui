import { inject } from "vue";

import { InjectFormItemStoreInjectKey } from "./injectKeys";

export function useFormItemStoreInject() {
  return inject(InjectFormItemStoreInjectKey, null);
}
