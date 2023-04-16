<script setup lang='ts'>
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
import ShowCasePlaceholder from './ShowCasePlaceholder.vue'
import ShowCaseDisabled from './ShowCaseDisabled.vue'
import ShowCaseAddOn from './ShowCaseAddOn.vue'
import ShowCaseAddOnDisabled from './ShowCaseAddOnDisabled.vue'
import ShowCaseInlineAddOn from './ShowCaseInlineAddOn.vue'
import ShowCaseInlineAddOnDisabled from './ShowCaseInlineAddOnDisabled.vue'
</script>

# Input

Input component let users enter and edit text.

## Basic Usage

::: raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseBasicUsage.vue
:::

## Placeholder

::: raw
<ShowCasePlaceholder class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCasePlaceholder.vue
:::

## Disabled

You can use the `disabled` property to control the Input component's disabled state.

::: raw
<ShowCaseDisabled class="vp-raw" />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseDisabled.vue
:::

## Add-on

The Input component supports add-ons. To add the leading add-on, use the `leading-add-on` slot. To add the trailing add-on, use the `trailing-add-on` slot.

::: raw
<ShowCaseAddOn class=vp-raw />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseAddOn.vue
:::

The example of adding add-ons to a disabled input:

::: raw
<ShowCaseAddOnDisabled class=vp-raw />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseAddOnDisabled.vue
:::

## Inline Add-on

The Input component supports inline add-ons. To add the inline leading add-on, use the `inline-leading-add-on` slot. To add the inline trailing add-on, use the `inline-trailing-add-on` slot.

::: raw
<ShowCaseInlineAddOn class=vp-raw />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseInlineAddOn.vue
:::

The example of adding leading add-ons to a disabled input:

::: raw
<ShowCaseInlineAddOnDisabled class=vp-raw />
:::

::: details View Source
<<< @/components/data-entry/input/ShowCaseInlineAddOnDisabled.vue
:::

## API

### Properties

| Property    | Type    | Default | Description                   |
| ----------- | ------- | ------- | ----------------------------- |
| modelValue  | string  | -       | Input value                   |
| disabled    | boolean | false   | Whether the input is disabled |
| placeholder | string  | -       | Input placeholder             |
