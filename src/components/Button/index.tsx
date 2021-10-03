import { defineComponent, PropType, ref } from "vue";

import styles from "./index.module.scss";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<"text" | "outlined" | "contained">,
      default: "text",
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const button = ref<HTMLButtonElement>();
    let ripples: HTMLDivElement[] = [];

    function handleCreateRipples(e: MouseEvent) {
      const x = e.offsetX;
      const y = e.offsetY;

      if (button.value) {
        const ripple = document.createElement("div");
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.className = styles.ripple;
        button.value.appendChild(ripple);

        ripples.push(ripple);
      }
    }

    function handleMouseUp() {
      const tmp = ripples;
      ripples = [];

      setTimeout(() => {
        tmp.forEach((ripple) => {
          ripple.remove();
        });
      }, 200);
    }

    function handleClick(e: MouseEvent) {
      emit("click", e);
    }

    return () => (
      <button
        ref={button}
        class={[
          styles.button,
          { [styles.text]: props.type === "text" },
          { [styles.outlined]: props.type === "outlined" },
          { [styles.contained]: props.type === "contained" },
        ]}
        onClick={handleClick}
        onMousedown={handleCreateRipples}
        onMouseup={handleMouseUp}
      >
        <span class={styles.buttonText}>
          {slots.default ? slots.default() : ""}
        </span>
      </button>
    );
  },
});
