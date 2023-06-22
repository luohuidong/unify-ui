<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# Select

## Basic Usage

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

:::details View source
<<< @/components/data-entry/select/ShowCaseBasicUsage.vue
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
