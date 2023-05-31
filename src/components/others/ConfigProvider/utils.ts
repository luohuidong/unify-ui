import type { InjectionKey } from "vue";

export interface ConfigProviderProps {
  locale: "en-US" | "zh-CN";
  fallbackLocale: "en-US" | "zh-CN";
}

export const configKey = Symbol("config") as InjectionKey<ConfigProviderProps>;
