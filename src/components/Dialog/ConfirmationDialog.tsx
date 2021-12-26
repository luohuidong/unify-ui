import { defineComponent, Teleport, onMounted, onUnmounted } from "vue";

import BaseDialog from "./BaseDialog.vue";

export default defineComponent({
  name: "Dialog",
  props: {
    title: {
      type: String,
    },
    supportingText: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
  emits: [
    "click:confirm-button",
    "click:cancel-button",
    "press:keyboard-escape-key",
  ],
  setup(props, { emit }) {
    function handleCancelButtonClick() {
      emit("click:cancel-button");
    }

    function handleConfirmButtonClick() {
      emit("click:confirm-button");
    }

    function handleKeyboardEscapeKey(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "escape") {
        emit("press:keyboard-escape-key");
      }
    }
    onMounted(() => {
      document.addEventListener("keyup", handleKeyboardEscapeKey);
    });
    onUnmounted(() => {
      document.removeEventListener("keyup", handleKeyboardEscapeKey);
    });

    return () => (
      <Teleport to="body">
        <BaseDialog
          title={props.title}
          supportingText={props.supportingText}
          visible={props.visible}
          onClick:confirm-button={handleConfirmButtonClick}
          onClick:cancel-button={handleCancelButtonClick}
        />
      </Teleport>
    );
  },
});
