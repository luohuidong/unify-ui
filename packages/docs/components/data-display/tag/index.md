<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue';
import ShowCasePreset from './ShowCasePreset.vue';
import ShowCaseCloseable from './ShowCaseCloseable.vue';
</script>

# Tag

## Basic Usage

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

:::details View source
<<< @/components/data-display/tag/ShowCaseBasicUsage.vue
:::

## Preset

:::raw
<ShowCasePreset class="vp-raw" />
:::

:::details View source
<<< @/components/data-display/tag/ShowCasePreset.vue
:::

## Closeable

:::raw
<ShowCaseCloseable class="vp-raw" />
:::

:::details View source
<<< @/components/data-display/tag/ShowCaseCloseable.vue
:::

## API

### Properties

```ts
withDefaults(
  defineProps<{
    type?: "default" | "success" | "info" | "warning" | "error";
    closable?: boolean;
  }>(),
  {
    type: "default",
  }
);
```

### Events

```ts
const emit = defineEmits<{
  (e: "close"): void;
}>();
```

### Slots

```ts
defineSlots<{
  default(props: {}): any;
}>();
```
