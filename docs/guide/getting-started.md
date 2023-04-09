# Getting Started

::: warning
This project is under active development. It is not already suitable for production because all component's api isn't stable.
:::

Easy UI is a Vue.js 3 UI Library. 

- All UI components style is based on Tailwind UI components style.
- Tree shaking is supported out of the box. 
- TypeScript is supported out of the box. 

## Usage

1. Install Easy UI

```bash
pnpm add "@luohuidong/easy-ui"
```

2. Import css style in main js file

```js
import "@luohuidong/easy-ui/dist/style.css";
```

3. Import components in your vue file

```vue
<script setup lang="ts">
import { EzButton } from "@luohuidong/easy-ui";
</script>

<template>
  <EzButton type="text">text button</EzButton>
</template>
```
