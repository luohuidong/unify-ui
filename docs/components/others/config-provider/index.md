<script setup lang="ts">
import ShowCaseInternationalization from './ShowCaseInternationalization.vue'
</script>

# ConfigProvider

## Internationalization

::: raw
<ShowCaseInternationalization class="vp-raw" />
:::

::: details View Source
<<< @/components/others/config-provider/ShowCaseInternationalization.vue
:::

## API

### Properties

```ts
const props = withDefaults(
  defineProps<{
    locale?: "en-US" | "zh-CN";
    fallbackLocale?: "en-US" | "zh-CN";
  }>(),
  {
    locale: "en-US",
    fallbackLocale: "en-US",
  }
);
```

### Slots

```ts
defineSlots<{
  default(props: {}): any;
}>();
```
