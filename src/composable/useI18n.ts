import { get } from "lodash-es";

import { useConfig } from "./useConfig";
import zh_CN from "unify-ui/locales/zh-CN.yaml";
import en from "unify-ui/locales/en.yaml";

const messages = {
  en,
  "zh-CN": zh_CN,
};

export function useI18n() {
  const config = useConfig();

  function t(key: string) {
    return get(messages[config.locale], key) as string | undefined;
  }

  return {
    t,
  };
}
