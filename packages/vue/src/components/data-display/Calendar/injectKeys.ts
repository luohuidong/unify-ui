import type { InjectionKey } from "vue";

import type { Store } from "./types";

export const storeKeys = Symbol("calendarStoreKeys") as InjectionKey<Store>;
