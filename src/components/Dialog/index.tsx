import { defineComponent, Teleport, onMounted, onUnmounted } from "vue";
import classnames from "classnames";

import Button from "../Button";
import styles from "./index.module.scss";

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
        <div
          class={classnames(styles.scrim, { [styles.hidden]: !props.visible })}
        >
          <div class={styles.container}>
            <div class={styles.textContainer}>
              {props.title && <div class={styles.title}>{props.title}</div>}
              <div>{props.supportingText}</div>
            </div>

            <div class={styles.buttonContainer}>
              <Button text="取消" onClick={handleCancelButtonClick}></Button>
              <Button text="确定" onClick={handleConfirmButtonClick}></Button>
            </div>
          </div>
        </div>
      </Teleport>
    );
  },
});
