<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
</script>

# Switch

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/switch/ShowCaseBasicUsage.vue
:::

## Disabled

::: raw
<ShowCaseDisabled />
:::

::: details View Source
<<< @/components/data-entry/switch/ShowCaseDisabled.vue
:::

## API

### Properties

```ts
defineProps<{
  modelValue?: boolean;
  disabled?: boolean;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();
```
