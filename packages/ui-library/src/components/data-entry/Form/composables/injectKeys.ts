import type { InjectionKey } from "vue";
import type { RuleItem } from "async-validator";

import type { FormProps } from "../types";

export interface State {
  formItems: Map<
    string,
    {
      rules: RuleItem[];
      validateStatus: "success" | "error" | undefined;
      validateMessage: "";
    }
  >;
}

export const injectKey = Symbol("form") as InjectionKey<{
  state: State;
  registerFormItem: (name: string, rules: RuleItem[]) => void;
  unRegisterFormItem: (name: string) => void;
  validate(name: string): Promise<void>;
  formProps: FormProps;
}>;
