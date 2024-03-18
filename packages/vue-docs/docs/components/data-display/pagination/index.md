<script setup lang='ts'>
import ShowCaseBaseUsage from './ShowCaseBaseUsage.vue'
</script>

# Pagination

## Basic Usage

::: raw
<ShowCaseBaseUsage />
:::

::: details View Source
<<< @/components/data-display/pagination/ShowCaseBaseUsage.vue
:::

## API

### Properties

```ts
defineProps<{
  total: number;
  pageSize: number;
  current: number;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "chagne", params: { current: number; pageSize: number }): void;
}>();
```
