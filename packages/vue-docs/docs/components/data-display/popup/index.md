<script setup lang='ts'>
import ShowCaseBaseUsage from './ShowCaseBaseUsage.vue'
import ShowCaseTriggerMethod from './ShowCaseTriggerMethod.vue'
</script>

# Popup

## Basic Usage

::: raw
<ShowCaseBaseUsage />
:::

::: details View Source
<<< @/components/data-display/popup/ShowCaseBaseUsage.vue
:::

## Trigger Method

::: raw
<ShowCaseTriggerMethod />
:::

::: details View Source
<<< @/components/data-display/popup/ShowCaseTriggerMethod.vue
:::

## API

### Properties

```ts
interface RootProps {
  placement: "top" | "bottom" | "left" | "right";
  overlayClassName?: string;
  /** Whether to show the arrow */
  showArrow?: boolean;
  trigger?: "hover" | "click" | "controlled";
  /** Whether the popup is visible */
  visible?: boolean;
  /** Whether the popup is disabled */
  disabled?: boolean;
  /** Offset of the popup  */
  offset?: number;
  /** To enable the floating element to be appended to the body */
  appendToBody?: boolean;
}

const props = withDefaults(defineProps<RootProps>(), {
  overlayClassName: void 0,
  showArrow: true,
  trigger: "hover",
  offset: 6,
  appendToBody: true,
});
```

### Events

```ts
const emits: RootEmits = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();
```

### Expose

```ts
defineExpose({
  showPopup, // () => void
  hidePopup, // () => void
});
```
