import { provide, reactive } from "vue";
import Schema from "async-validator";
import type { RuleItem } from "async-validator";

import { injectKey, State } from "./injectKeys";
import type { FormProps } from "../types";

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

  async function validate(name: string) {
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

  provide(injectKey, { state, registerFormItem, unRegisterFormItem, validate, formProps: props });

  return {
    state,
    registerFormItem,
    unRegisterFormItem,
    validate,
  };
}
