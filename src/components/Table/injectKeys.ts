import type { InjectionKey, ComputedRef, Ref } from "vue";
import type { RootProps, ColumnData } from "./types";

export const rootPropsKey = Symbol() as InjectionKey<RootProps>;
export const slotKeysKey = Symbol() as InjectionKey<Ref<Set<string>>>;
export const columnCount = Symbol() as InjectionKey<ComputedRef<number>>;
export const columnsDataKey = Symbol() as InjectionKey<ComputedRef<ColumnData[]>>;
