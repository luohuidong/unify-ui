<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseNoLabel from './ShowCaseNoLabel.vue' 
import ShowCaseIndeterminate from './ShowCaseIndeterminate.vue'
</script>

# Checkbox

## Basic Usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/checkbox/ShowCaseBasicUsage.vue
:::

## Disabled

::: raw
<ShowCaseDisabled class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/checkbox/ShowCaseDisabled.vue
:::

## No Label

::: raw
<ShowCaseNoLabel class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/checkbox/ShowCaseNoLabel.vue
:::

## Indeterminate

::: raw
<ShowCaseIndeterminate class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/checkbox/ShowCaseIndeterminate.vue
:::

## API

### Properties

```ts
const props = withDefaults(
  defineProps<{
    label?: string;
    checked?: boolean;
    value?: Value;
    disabled?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    label: "",
    value: void 0,
    disabled: false,
  }
);
```

### Events

```ts
const emit = defineEmits<{
  (e: "update:checked", checked: boolean): void;
  (e: "change", checked: boolean): void;
}>();
```
