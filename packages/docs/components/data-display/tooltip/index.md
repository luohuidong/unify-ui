<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
</script>

# Tooltip

## Basic Usage

<ShowCaseBasicUsage />

:::details View Source
<<< @/components/data-display/tooltip/ShowCaseBasicUsage.vue
:::

## Disabled

<ShowCaseDisabled />

:::details View Source
<<< @/components/data-display/tooltip/ShowCaseDisabled.vue
:::

## API

| Property     | Description                           | Type    | Accepted Values                  | Default |
| ------------ | ------------------------------------- | ------- | -------------------------------- | ------- |
| title        | The content of the tooltip            | string  | -                                | -       |
| placement    | The placement of the tooltip          | string  | `top`, `bottom`, `left`, `right` | -       |
| appendToBody | Whether to append the tooltip to body | boolean | -                                | -       |
| disabled     | Whether the tooltip is disabled       | boolean | -                                | -       |
