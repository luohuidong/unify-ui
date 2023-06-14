<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseCustomizedFormControl from './ShowCaseCustomizedFormControl.vue'
</script>

# Form

## Basic Usage

Building a form using `UniForm` and `UniFormItem` is incredibly straightforward.

Internally, the form utilizes `async-validator` to validate the data entered into it. You can set validation rules for each form item using the `rules` property. For more information regarding validation rules, please refer to the [async-validator GitHub page](https://github.com/yiminghe/async-validator).

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/form/ShowCaseBasicUsage.vue
:::

## Customized Form Control

In some cases, you might have to use a form control that is not supplied by Unify UI. However, `UniFormItem` has Scoped Slots that offer a `validateStatus` state, enabling you to customize the form control as needed.

:::raw
<ShowCaseCustomizedFormControl class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/form/ShowCaseCustomizedFormControl.vue
:::

## Form API

### Properties

```ts
const props = withDefaults(
  defineProps<{
    model: Model;
    layout?: "horizontal" | "vertical" | "inline";
  }>(),
  {
    layout: "horizontal",
  }
);
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
    label: string;
    name: string;
    rules?: RuleItem[];
  }>(),
  {
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
