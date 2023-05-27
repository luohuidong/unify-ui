<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue';
import ShowCasePlaceholder from './ShowCasePlaceholder.vue';
import ShowCaseDisabled from './ShowCaseDisabled.vue';
</script>

# Password

## Basic usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/password/ShowCaseBasicUsage.vue
:::

## Placeholder

::: raw
<ShowCasePlaceholder class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/password/ShowCasePlaceholder.vue
:::

## Disabled

::: raw
<ShowCaseDisabled class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/password/ShowCaseDisabled.vue
:::

## API

### Properties

```ts
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    disabled?: boolean;
    placeholder?: string;
  }>(),
  {
    modelValue: "",
    placeholder: "",
  }
);
```

### Events

```ts
defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "input", value: string): void;
  (e: "change", value: string): void;
}>();
```
