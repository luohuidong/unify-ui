import { InjectionKey } from "vue";
import type { RootProps } from "./types";

export const rootProps = Symbol() as InjectionKey<RootProps>;
