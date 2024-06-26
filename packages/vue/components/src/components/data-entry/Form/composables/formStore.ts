import { provide, reactive, inject } from "vue";
import type { InjectionKey } from "vue";
import Schema from "async-validator";
import type { RuleItem } from "async-validator";

import type { FormProps, FormItemInfo } from "../types";

interface State {
  formItems: Map<string, FormItemInfo>;
}

const injectFormStoreKey = Symbol("form") as InjectionKey<{
  state: State;
  registerFormItem: (name: string, rules: RuleItem[]) => void;
  unRegisterFormItem: (name: string) => void;
  validateFormItem(name: string): Promise<void>;
  formProps: FormProps;
}>;

export function useFormStoreProvider(props: FormProps) {
  const state: State = reactive({
    formItems: new Map(),
  });

  function registerFormItem(name: string, rules: RuleItem[]) {
    state.formItems.set(name, {
      rules,
      validateMessage: "",
      validateStatus: undefined,
    });
  }

  function unRegisterFormItem(name: string) {
    state.formItems.delete(name);
  }

  async function validateFormItem(name: string) {
    const formItemInfo = state.formItems.get(name);

    if (!formItemInfo) return;

    const validator = new Schema({
      [name]: formItemInfo?.rules || [],
    });

    await validator
      .validate({
        [name]: props.model[name],
      })
      .then(() => {
        formItemInfo.validateStatus = "success";
        formItemInfo.validateMessage = "";
      })
      .catch(({ errors }) => {
        formItemInfo.validateStatus = "error";
        formItemInfo.validateMessage = errors[0].message;
      });
  }

  provide(injectFormStoreKey, {
    state,
    registerFormItem,
    unRegisterFormItem,
    validateFormItem,
    formProps: props,
  });

  return {
    state,
    registerFormItem,
    unRegisterFormItem,
    validateFormItem,
  };
}

export function useFormStoreInject() {
  return inject(injectFormStoreKey);
}
