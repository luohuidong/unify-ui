<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# Calendar

## Basic Usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-display/calendar/ShowCaseBasicUsage.vue
:::

## API

### Properties

```ts
interface RootProps {
  readonly modelValue: Date | null | undefined;
  readonly disabledDate?: (date: Date) => boolean;
}
const props = defineProps<RootProps>();
```

### Events

```ts
interface RootEmit {
  (e: "update:modelValue", value: Date): void;
  (e: "select", value: Date): void;
}
const emit = defineEmits<RootEmit>();
```

### Slots
