<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseCustomizedFormControl from './ShowCaseCustomizedFormControl.vue'
import ShowCaseLayout from './ShowCaseLayout.vue'
import { Form, CustomizedInput } from './ShowCaseCustomizedFormControl2'
import ShowCaseCustomizedFormControl2 from './ShowCaseCustomizedFormControl2.vue'
import ShowCaseCustomizedFormControl2Input from './ShowCaseCustomizedFormControl2Input.vue'
</script>

# Form

## Basic Usage

Building a form using `UniForm` and `UniFormItem` is incredibly straightforward.

Internally, the form utilizes `async-validator` to validate the data entered into it. You can set validation rules for each form item using the `rules` property. For more information regarding validation rules, please refer to the [async-validator GitHub page](https://github.com/yiminghe/async-validator).

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/form/ShowCaseBasicUsage.vue
:::

## Customized Form Control

In some cases, you might need to use a custom form control not provided by Unify UI. The appearance of this customized form control may behave unexpectedly when the value is invalid. For instance, you may want the custom form control to display a red border when the value is invalid. There are two methods to achieve this.

The first method involves using `UniFormItem`, which provides Scoped Slots with a `validateStatus` state. When the form control's value is invalid, validateStatus is set to `error`, and when the value is valid, it is set to `success`. You can use this to customize the appearance of the form control:

::: raw
<ShowCaseCustomizedFormControl />
:::

::: details View Source
<<< @/components/data-entry/form/ShowCaseCustomizedFormControl.vue
:::

The second method involves using the composable function `useGetFormItemValidateStatus`, which provides access to the `validateStatus` state. It's important to mention that when using this method, you need to wrap the form control with `UniFormItem` because the `validateStatus` state is provided by `UniFormItem` using the `provide` API:

::: raw
<ShowCaseCustomizedFormControl2 />
:::

::: details View Source

Source code of customized input:

<<< @/components/data-entry/form/ShowCaseCustomizedFormControl2Input.vue

Source code of form example:

<<< @/components/data-entry/form/ShowCaseCustomizedFormControl2.vue
:::

## Layout

The form layout can be set using the `layout` property. The default value is `vertical`.

::: raw
<ShowCaseLayout />
:::

::: details View Source
<<< @/components/data-entry/form/ShowCaseLayout.vue
:::

## Form API

### Properties

```ts
export interface FormProps {
  model: Model;
  layout?: "horizontal" | "vertical" | "inline";
  labelWidth?: string;
}

const props = withDefaults(defineProps<FormProps>(), {
  layout: "vertical",
});
```

### Events

```ts
const emits = defineEmits<{
  (e: "update:model", value: Model): void;
}>();
```

### Slots

```ts
defineSlots<{
  default(props: {}): any;
}>();
```

### Expose

```ts
defineExpose({
  validate, // trigger data entry validation
  clearValidate, // clear data entry validation,
  resetFields, // reset data and clear validation
});
```

## FormItem API

### Properties

```ts
import type { RuleItem } from "async-validator";

const props = withDefaults(
  defineProps<{
    label?: string;
    name?: string;
    rules?: RuleItem[];
  }>(),
  {
    label: undefined,
    name: undefined,
    rules: () => [],
  }
);
```

### Slots

```ts
export type ValidateStatus = "success" | "error" | undefined;

defineSlots<{
  default(props: { validateStatus: ValidateStatus }): any;
}>();
```
