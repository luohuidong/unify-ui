# Easy UI

![NPM License](https://img.shields.io/npm/l/@easy-ui-team/easy-ui) ![npm](https://img.shields.io/npm/v/@easy-ui-team/easy-ui) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@easy-ui-team/easy-ui) ![npm](https://img.shields.io/npm/dm/@easy-ui-team/easy-ui) ![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/easy-ui-team/easy-ui/release.yml?branch=main) ![GitHub last commit](https://img.shields.io/github/last-commit/easy-ui-team/easy-ui) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/easy-ui-team/easy-ui)

> This project is currently under active development and is not yet suitable for production use, as the APIs for all components are not yet stable.

Easy UI is a UI library for Vue.js 3.

- Easy UI provides type definitions for all components because it was built with the latest stable version of TypeScript.
- Easy UI supports tree shaking out of the box, as it was built using ES Modules.
- While Easy UI does not have a direct dependency on Tailwind CSS, the styling of all components is heavily influenced by the style of Tailwind UI components.

## Usage

1. Install Easy UI

```bash
pnpm add @easy-ui-team/easy-ui
```

2. Import css style in main js file

```js
import "@easy-ui-team/easy-ui/dist/style.css";
```

3. Import components in your vue file

```vue
<script setup lang="ts">
import { EzButton } from "@easy-ui-team/easy-ui";
</script>

<template>
  <EzButton type="text">text button</EzButton>
</template>
```
