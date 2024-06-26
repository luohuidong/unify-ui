<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseNoLabel from './ShowCaseNoLabel.vue'
</script>

# Radio

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/radio/ShowCaseBasicUsage.vue
:::

## Disabled

::: raw
<ShowCaseDisabled />
:::

::: details View Source
<<< @/components/data-entry/radio/ShowCaseDisabled.vue
:::

## No Label

::: raw
<ShowCaseNoLabel />
:::

::: details View Source
<<< @/components/data-entry/radio/ShowCaseNoLabel.vue
:::

## API

### Properties

```ts
generic = "T extends string | number | symbol";

defineProps<{
  name: string;
  label?: string;
  value: T;
  checked?: boolean;
  disabled?: boolean;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "change", value: T): void;
}>();
```
