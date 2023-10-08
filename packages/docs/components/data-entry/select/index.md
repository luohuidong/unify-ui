<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseDisabledOption from './ShowCaseDisabledOption.vue'
import ShowCaseLoading from './ShowCaseLoading.vue'
import ShowCaseLocalSearch from './ShowCaseLocalSearch.vue'
import ShowCaseRemoteSearch from './ShowCaseRemoteSearch.vue'
import ShowCaseMultiple from './ShowCaseMultiple.vue'
</script>

# Select

## Basic Usage

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseBasicUsage.vue
:::

## Disabled

:::raw
<ShowCaseDisabled class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseDisabled.vue
:::

## Disabled Option

:::raw
<ShowCaseDisabledOption class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseDisabledOption.vue
:::

## Loading

:::raw
<ShowCaseLoading class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseLoading.vue
:::

## Local Search

:::raw
<ShowCaseLocalSearch class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseLocalSearch.vue
:::

## Remote Search

:::raw
<ShowCaseRemoteSearch class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseRemoteSearch.vue
:::

## Multiple

:::raw
<ShowCaseMultiple class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseMultiple.vue
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
