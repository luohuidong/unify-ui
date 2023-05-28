import { inject } from "vue";
import type { InjectionKey } from "vue";

export interface ConfigProviderProps {
  locale: "en" | "zh-CN";
}

export const configKey = Symbol("config") as InjectionKey<ConfigProviderProps>;

export function useConfig() {
  const config = inject(configKey, {
    locale: "en",
  });

  return config as ConfigProviderProps;
}