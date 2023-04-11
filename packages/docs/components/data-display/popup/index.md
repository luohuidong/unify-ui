<script setup lang='ts'>
import ShowCaseBaseUsage from './ShowCaseBaseUsage.vue'
import ShowCaseTriggerMethod from './ShowCaseTriggerMethod.vue'
</script>

# Popup

## Basic Usage

::: raw
<ShowCaseBaseUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/popup/ShowCaseBaseUsage.vue
:::

## Trigger Method

::: raw
<ShowCaseTriggerMethod class="vp-raw" />
:::

::: details View Source
<<< @/components/data-display/popup/ShowCaseBaseUsage.vue
:::

## API

| Property         | Description                   | Type    | Accepted Values                         | Default |
| ---------------- | ----------------------------- | ------- | --------------------------------------- | ------- |
| placement        |                               | string  | `top`, `bottom`, `left`, `right`        | -       |
| appendToBody     |                               | boolean | -                                       | false   |
| overlayClassName |                               | string  | -                                       | -       |
| backgroundColor  |                               | string  | -                                       | -       |
| fontColor        |                               | string  | -                                       | -       |
| showArrow        | Whether to show the arrow     | boolean | -                                       | true    |
| trigger          |                               | string  | `hover`, `click`, `focus`, `controlled` | `hover` |
| visible          | Whether the popup is visible  | boolean | -                                       | -       |
| disabled         | Whether the popup is disabled | boolean | -                                       | -       |
| offset           | Offset of the popup           | number  | -                                       | 6       |
