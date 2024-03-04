<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue';
import ShowCaseMultiple from './ShowCaseMultiple.vue';
</script>

# FilePicker

## Basic usage

::: raw
<ShowCaseBasicUsage />
:::

::: details View Source
<<< @/components/data-entry/file-picker/ShowCaseBasicUsage.vue
:::

## Multiple files

::: raw
<ShowCaseMultiple />
:::

::: details View Source
<<< @/components/data-entry/file-picker/ShowCaseMultiple.vue
:::

## API

### Properties

```ts
defineProps<{
  multiple?: boolean;
}>();
```

### Events

```ts
const emits = defineEmits<{
  (e: "file-change", files: FileList): void;
}>();
```
