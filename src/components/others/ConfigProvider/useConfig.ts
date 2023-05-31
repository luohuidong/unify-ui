import { inject } from "vue";

import { configKey, type ConfigProviderProps } from "./utils";

export function useConfig() {
  const config = inject(configKey, {
    locale: "en-US",
    fallbackLocale: "en-US",
  }) as ConfigProviderProps;

  return config;
}
