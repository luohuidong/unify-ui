<script setup lang='ts'>
import ShowCasePrimaryButton from './ShowCasePrimaryButton.vue'
import ShowCaseSecondaryButton from './ShowCaseSecondaryButton.vue'
import ShowCaseSoftButton from './ShowCaseSoftButton.vue'
</script>

# Button

Easy UI provide 3 types of button.

- Primary Button
- Secondary Button
- Soft Button

## Primary Button

<ShowCasePrimaryButton />
:::details View Source

```vue
<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="primary" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="primary" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="primary" size="xl">Button size: xl</EzButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
```

:::

## Secondary Button

<ShowCaseSecondaryButton />

:::details View Source

```vue
<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="secondary" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="secondary" size="xl">Button size: xl</EzButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
```

:::

## Soft Button

<ShowCaseSoftButton />

:::details View Source

```vue
<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <div class="container">
    <div>
      <EzButton type="soft" size="xs">Button size: xs</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="s">Button size: s</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="m">Button size: m</EzButton>
    </div>

    <div>
      <EzButton type="soft" size="l"> Button size: l </EzButton>
    </div>

    <div>
      <EzButton type="soft" size="xl">Button size: xl</EzButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
```

:::

## API

| Property | Description                    | Type    | Accepted Values                | Default   |
| -------- | ------------------------------ | ------- | ------------------------------ | --------- |
| type     | Button type                    | string  | `primary`, `secondary`, `soft` | `primary` |
| size     | Button size                    | string  | `xs`, `s`, `m`, `l`, `xl`      | `m`       |
| disabled | Whether the button is disabled | boolean | -                              | `false`   |
| loading  | Whether the button is loading  | boolean | -                              | `false`   |
