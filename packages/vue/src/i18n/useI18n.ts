import { get } from "lodash-es";

import { useConfig } from "../components/others/ConfigProvider/utils";
import zh_CN from "./locales/zh-CN.yaml";
import en_US from "./locales/en-US.yaml";

const messages = {
  "en-US": en_US,
  "zh-CN": zh_CN,
};

export function useI18n() {
  const config = useConfig();

  function t(key: string) {
    return get(messages[config.locale] ?? messages[config.fallbackLocale ?? "en-US"], key) as
      | string
      | undefined;
  }

  return {
    t,
  };
}
