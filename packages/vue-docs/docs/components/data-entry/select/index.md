<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseDisabledOption from './ShowCaseDisabledOption.vue'
import ShowCaseLoading from './ShowCaseLoading.vue'
import ShowCaseLocalSearch from './ShowCaseLocalSearch.vue'
import ShowCaseRemoteSearch from './ShowCaseRemoteSearch.vue'
import ShowCaseMultiple from './ShowCaseMultiple.vue'
import ShowCaseStatusError from './ShowCaseStatusError.vue'
</script>

# Select

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseBasicUsage.vue
:::

## Disabled

::: raw
<ShowCaseDisabled />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseDisabled.vue
:::

## Disabled Option

::: raw
<ShowCaseDisabledOption />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseDisabledOption.vue
:::

## Loading

::: raw
<ShowCaseLoading />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseLoading.vue
:::

## Local Search

::: raw
<ShowCaseLocalSearch />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseLocalSearch.vue
:::

## Remote Search

::: raw
<ShowCaseRemoteSearch />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseRemoteSearch.vue
:::

## Multiple

::: raw
<ShowCaseMultiple />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseMultiple.vue
:::

## Status Error

::: raw
<ShowCaseStatusError />
:::

::: details View source
<<< @/components/data-entry/select/ShowCaseStatusError.vue
:::

## API

### Properties

```ts
defineProps<{
  modelValue: T;
  placeholder?: string;
  options: { label: string; value: T }[];
}>();
```

### Events

```ts
const emit = defineEmits<{
  (e: "update:modelValue", value: T | undefined): void;
  (e: "change", value: T | undefined): void;
}>();
```

### Slots

```ts
defineSlots<{
  option(props: {}): any;
}>();
```
