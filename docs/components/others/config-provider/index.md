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
interface ConfigProviderProps {
  locale: "en" | "zh-CN";
}

const props = defineProps<ConfigProviderProps>();
```

### Slots

```ts
defineSlots<{
  default(props: {}): any;
}>();
```
