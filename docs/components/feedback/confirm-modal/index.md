<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# ConfirmModal

Confirm Modal use to preventing accidental actions. When the user needs to perform a potentially dangerous action, a Modal can be used to display a confirmation dialog to prevent accidental actions that could have negative consequences.

## Basic Usage

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/feedback/confirm-modal/ShowCaseBasicUsage.vue
:::

## APIS

### confirm

```ts
interface ConfirmOptions {
  title: string;
  supportingText: string;
}

function confirm(options: ConfirmOptions): Promise<"confirm" | "cancel">;
```
