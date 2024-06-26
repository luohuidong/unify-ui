<script setup lang="ts">
import ShowCase from './ShowCase.vue'
</script>

# NotFound

We can use the `UniNotFound` component on the 404 page, which will be displayed when users visit a page that does not exist.

::: raw
<ShowCase />
:::

::: details View Source
<<< @/components/feedback/not-found/ShowCase.vue
:::

## API

### Property

```ts
withDefaults(
  defineProps<{
    align?: "left" | "center" | "right";
  }>(),
  {
    align: "center",
  }
);
```
