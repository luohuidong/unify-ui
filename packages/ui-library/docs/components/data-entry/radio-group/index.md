<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseInline from './ShowCaseInline.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
</script>

# RadioGroup

## Basic usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View source
<<< @/components/data-entry/radio-group/ShowCaseBasicUsage.vue
:::

## Inline layout

::: raw
<ShowCaseInline class="vp-raw" />
:::

::: details View source
<<< @/components/data-entry/radio-group/ShowCaseInline.vue
:::

## Disabled

::: raw
<ShowCaseDisabled class="vp-raw" />
:::

::: details View source
<<< @/components/data-entry/radio-group/ShowCaseDisabled.vue
:::

## API

### Properties

```ts
generic = "T extends string | number | symbol";

defineProps<{
  modelValue?: T;
  options: { label: string; value: T }[];
  name: string;
  inline?: boolean;
  disabled?: boolean;
}>();
```

### Events

```ts
function handleChange(value: T) {
  emits("update:modelValue", value);
  /** Triggered after a value is selected */
  emits("change", value);
}
```
