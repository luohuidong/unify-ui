# Unify UI

![NPM License](https://img.shields.io/npm/l/unify-ui) ![npm](https://img.shields.io/npm/v/unify-ui) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/unify-ui) ![npm](https://img.shields.io/npm/dm/unify-ui) ![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/unify-ui/unify-ui/release.yml?branch=main) ![GitHub last commit](https://img.shields.io/github/last-commit/unify-ui/unify-ui) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/unify-ui/unify-ui)

> This project is currently under active development and is not yet suitable for production use, as the APIs for all components are not yet stable.

Unify UI is a UI library for Vue.js 3.

- Unify UI provides type definitions for all components because it was built with the latest stable version of TypeScript.
- Unify UI supports tree shaking out of the box, as it was built using ES Modules.
- While Unify UI does not have a direct dependency on Tailwind CSS, the styling of all components is heavily influenced by the style of Tailwind UI components.

## Usage

1. Install Unify UI

```bash
pnpm add unify-ui
```

2. Import css style in main js file

```js
import "unify-ui/dist/style.css";
```

3. Import components in your vue file

```vue
<script setup lang="ts">
import { EzButton } from "unify-ui";
</script>

<template>
  <EzButton type="text">text button</EzButton>
</template>
```
