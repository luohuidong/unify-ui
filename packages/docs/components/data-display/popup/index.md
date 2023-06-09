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

### Properties

```ts
const props = withDefaults(
  defineProps<{
    placement: "top" | "bottom" | "left" | "right";
    appendToBody?: boolean;
    overlayClassName?: string;
    backgroundColor?: string;
    fontColor?: string;
    /** Whether to show the arrow */
    showArrow?: boolean;
    trigger?: "hover" | "click" | "focus" | "controlled";
    /** Whether the popup is visible */
    visible?: boolean;
    /** Whether the popup is disabled */
    disabled?: boolean;
    /** Offset of the popup  */
    offset?: number;
  }>(),
  {
    appendToBody: false,
    overlayClassName: void 0,
    backgroundColor: void 0,
    fontColor: void 0,
    showArrow: true,
    trigger: "hover",
    offset: 6,
  }
);
```

### Events

```ts
const emits: RootEmits = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();
```
