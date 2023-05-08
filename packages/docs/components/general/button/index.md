<script setup lang='ts'>
import ShowCasePrimaryButton from './ShowCasePrimaryButton.vue'
import ShowCaseSecondaryButton from './ShowCaseSecondaryButton.vue'
import ShowCaseSoftButton from './ShowCaseSoftButton.vue'
</script>

# Button

Unify UI provide 3 types of button.

- Primary Button
- Secondary Button
- Soft Button

## Primary Button

::: raw
<ShowCasePrimaryButton class="vp-raw" />
:::

::: details View Source
<<< @/components/general/button/ShowCasePrimaryButton.vue
:::

## Secondary Button

::: raw
<ShowCaseSecondaryButton class="vp-raw" />
:::

::: details View Source
<<< @/components/general/button/ShowCaseSecondaryButton.vue
:::

## Soft Button

::: raw
<ShowCaseSoftButton class="vp-raw" />
:::

::: details View Source
<<< @/components/general/button/ShowCaseSoftButton.vue
:::

## API

### Properties

```ts
withDefaults(
  defineProps<{
    type?: "secondary" | "primary" | "soft";
    size?: "xs" | "s" | "m" | "l" | "xl";
  }>(),
  {
    type: "secondary",
    size: "m",
  }
);
```

### Events

```ts
const emits = defineEmits(["click"]);
```
