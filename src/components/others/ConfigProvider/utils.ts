import { inject, reactive } from "vue";
import type { InjectionKey } from "vue";

export interface ConfigProviderProps {
  locale: "en-US" | "zh-CN";
  fallbackLocale: "en-US" | "zh-CN";
}

export const configKey = Symbol("config") as InjectionKey<ConfigProviderProps>;

export class GlobalConfig {
  static instance: GlobalConfig;
  static getInstance() {
    if (!GlobalConfig.instance) {
      GlobalConfig.instance = new GlobalConfig();
    }
    return GlobalConfig.instance;
  }

  config: ConfigProviderProps = reactive({
    locale: "en-US",
    fallbackLocale: "en-US",
  });
}

export function useConfig() {
  return inject(configKey, GlobalConfig.getInstance().config);
}
