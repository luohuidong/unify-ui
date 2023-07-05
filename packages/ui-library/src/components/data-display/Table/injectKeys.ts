import type { InjectionKey, ComputedRef, Ref } from "vue";
import type { TableProps, ColumnData, ShowShadow, TableState, TableEmits, ColumnsInfo } from "./types";

export const tablePropsKey = Symbol() as InjectionKey<TableProps>;
export const tableEmitsKey = Symbol() as InjectionKey<TableEmits>;
export const tableStateKey = Symbol() as InjectionKey<TableState>;

export const slotKeysKey = Symbol() as InjectionKey<Ref<Set<string>>>;
export const columnsInfoKey = Symbol() as InjectionKey<ColumnsInfo>;
export const shadowShow = Symbol() as InjectionKey<ShowShadow>;

export const containerRefKey = Symbol() as InjectionKey<Ref<HTMLElement | undefined>>;
export const tableRefKey = Symbol() as InjectionKey<Ref<HTMLElement | undefined>>;
