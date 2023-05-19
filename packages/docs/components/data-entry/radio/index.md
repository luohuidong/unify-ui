<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# Radio

## Basic Usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/radio/ShowCaseBasicUsage.vue
:::

## API

### Properties

```ts
generic = "T extends string | number | symbol";

defineProps<{
  name: string;
  label: string;
  value: T;
  checked?: boolean;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "change", value: T): void;
}>();
```
