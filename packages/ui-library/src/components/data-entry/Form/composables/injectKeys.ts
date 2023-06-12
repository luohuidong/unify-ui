import type { InjectionKey, ComputedRef } from "vue";
import type { RuleItem } from "async-validator";

import type { FormProps, FormItemInfo } from "../types";

export interface State {
  formItems: Map<string, FormItemInfo>;
}

export const injectFormStoreKey = Symbol("form") as InjectionKey<{
  state: State;
  registerFormItem: (name: string, rules: RuleItem[]) => void;
  unRegisterFormItem: (name: string) => void;
  validateFormItem(name: string): Promise<void>;
  formProps: FormProps;
}>;

export const InjectFormItemStoreInjectKey = Symbol("form-item") as InjectionKey<{
  formItemInfo: ComputedRef<FormItemInfo | undefined>;
}>;
