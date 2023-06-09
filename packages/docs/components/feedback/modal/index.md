<script setup lang="ts">
import ShowCaseBasicUsage from './ShowCaseBasicUsage.vue'
</script>

# Modal

The Modal component is a common UI component used to display a modal dialog as an overlay on the current page. It is typically used to show important content or to facilitate user interaction.

The main purposes of the Modal component include:

1. Displaying a prompt: When it is necessary to inform the user about something, a modal dialog can be used to display a prompt, such as prompting the user to log in or indicating if an operation was successful or unsuccessful.
1. Showing detailed information: When detailed information needs to be displayed, a Modal can be used to show it, such as showing product details or user information.
1. Facilitating user interaction: When the user needs to perform certain actions, a Modal can be used to display an interactive dialog, such as confirming an operation or requesting user input.
1. Preventing accidental actions: When the user needs to perform a potentially dangerous action, a Modal can be used to display a confirmation dialog to prevent accidental actions that could have negative consequences.

In short, the Modal component can provide a better user experience by helping users better understand the context and actions they are performing.

## Basic Usage

:::raw
<ShowCaseBasicUsage class="vp-raw" />
:::

::: details View Source
<<< @/components/feedback/modal/ShowCaseBasicUsage.vue
:::

## API

### Properties

```ts
withDefaults(
  defineProps<{
    visible: boolean;
    title?: string;
    supportingText?: string;
    confirmText?: string;
    cancelText?: string;
    modalClass?: string;
  }>(),
  {
    title: undefined,
    supportingText: undefined,
    confirmText: undefined,
    cancelText: undefined,
    modalClass: undefined,
  }
);
```

### Events

```ts
const emits = defineEmits<{
  (e: "click:confirm-button"): void;
  (e: "click:cancel-button"): void;
  (e: "press:keyboard-escape-key"): void;
}>();
```

### Slots

- `default`: The content of the modal
- `title`: The title of the modal
- `actions`: The footer of the modal
