import type { InjectionKey } from "vue";
import type { RootProps } from "./types";

export const rootPropsKey = Symbol() as InjectionKey<RootProps>;
