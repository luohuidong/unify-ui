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
<<< @/components/general/button/ShowCasePrimaryButton.vue
:::

## Secondary Button

<ShowCaseSecondaryButton />

:::details View Source
<<< @/components/general/button/ShowCaseSecondaryButton.vue
:::

## Soft Button

<ShowCaseSoftButton />

:::details View Source

<<< @/components/general/button/ShowCaseSoftButton.vue

:::

## API

| Property | Description                    | Type    | Accepted Values                | Default   |
| -------- | ------------------------------ | ------- | ------------------------------ | --------- |
| type     | Button type                    | string  | `primary`, `secondary`, `soft` | `primary` |
| size     | Button size                    | string  | `xs`, `s`, `m`, `l`, `xl`      | `m`       |
| disabled | Whether the button is disabled | boolean | -                              | `false`   |
| loading  | Whether the button is loading  | boolean | -                              | `false`   |
