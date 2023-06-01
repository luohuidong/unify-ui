import { inject } from "vue";

import { configKey, type ConfigProviderProps } from "../components/others/ConfigProvider/utils";

export function useConfig(): ConfigProviderProps {
  return inject(configKey, {
    locale: "en-US",
    fallbackLocale: "en-US",
  });
}
