<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# Switch

## Basic Usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/switch/ShowCaseBasicUsage.vue
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
