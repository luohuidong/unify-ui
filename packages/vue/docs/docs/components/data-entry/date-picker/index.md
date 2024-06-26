<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# DatePicker

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/date-picker/ShowCaseBasicUsage.vue
:::

## API

### Properties

```ts
defineProps<{
  modelValue: Date | undefined;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "update:modelValue", value: Date): void;
}>();
```

### Slots
