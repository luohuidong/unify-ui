<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseInline from './ShowCaseInline.vue'
</script>

# CheckboxGroup

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/checkbox-group/ShowCaseBasicUsage.vue
:::

## Disabled

::: raw
<ShowCaseDisabled />
:::

::: details View Source
<<< @/components/data-entry/checkbox-group/ShowCaseDisabled.vue
:::

## Inline Layout

::: raw
<ShowCaseInline />
:::

::: details View Source
<<< @/components/data-entry/checkbox-group/ShowCaseInline.vue
:::

## API

### Properties

```ts
const props = defineProps<{
  options: { label: string; value: Value }[];
  modelValue: Set<Value>;
  disabled?: boolean;
  inline?: boolean;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "update:modelValue", value: Set<V>): void;
  (e: "change", value: Set<V>): void;
}>();
```
