import { defineComponent } from "vue";
import classnames from "classnames";

import styles from "./BaseDialog.module.scss";
import Button from "../Button";

export default defineComponent({
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

  emits: ["click:confirm-button", "click:cancel-button"],

  setup(props, { emit }) {
    function handleConfirmButtonClick() {
      emit("click:confirm-button");
    }

    function handleCancelButtonClick() {
      emit("click:cancel-button");
    }

    return () => (
      <div
        class={classnames([styles.scrim, { [styles.hidden]: !props.visible }])}
      >
        <div class={styles.container}>
          <div class={styles.textContainer}>
            {props.title && <div class={styles.title}>{props.title}</div>}

            <div class={styles.supportText}>{props.supportingText}</div>
          </div>

          <div class={styles.buttonContainer}>
            <Button text={props.cancelText} onClick={handleCancelButtonClick} />

            <Button
              text={props.confirmText}
              onClick={handleConfirmButtonClick}
            />
          </div>
        </div>
      </div>
    );
  },
});
