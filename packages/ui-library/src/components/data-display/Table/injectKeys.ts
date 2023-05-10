import type { InjectionKey, ComputedRef, Ref } from "vue";
import type { TableProps, ColumnData, ShowShadow, TableState, TableEmits } from "./types";

export const tablePropsKey = Symbol() as InjectionKey<TableProps>;
export const tableEmitsKey = Symbol() as InjectionKey<TableEmits>;
export const tableStateKey = Symbol() as InjectionKey<TableState>;

export const slotKeysKey = Symbol() as InjectionKey<Ref<Set<string>>>;
export const columnCount = Symbol() as InjectionKey<ComputedRef<number>>;
export const columnsDataKey = Symbol() as InjectionKey<ComputedRef<ColumnData[]>>;
export const shadowShow = Symbol() as InjectionKey<ShowShadow>;

export const containerRefKey = Symbol() as InjectionKey<Ref<HTMLElement | undefined>>;
export const tableRefKey = Symbol() as InjectionKey<Ref<HTMLElement | undefined>>;
