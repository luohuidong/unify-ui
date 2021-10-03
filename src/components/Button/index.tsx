import { defineComponent, ref } from "vue";

import styles from "./index.module.scss";

export default defineComponent({
  name: "Button",
  emits: ["click"],
  setup(props, { slots, emit }) {
    let ripples: HTMLDivElement[] = [];

    function handleCreateRipples(e: MouseEvent) {
      if (!e.target) {
        return;
      }

      const target = e.target as HTMLButtonElement;
      const x = e.offsetX;
      const y = e.offsetY;

      const ripple = document.createElement("div");
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.className = styles.ripple;
      target.appendChild(ripple);

      ripples.push(ripple);
    }

    function handleMouseUp(e: MouseEvent) {
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
        class={styles.button}
        onClick={handleClick}
        onMousedown={handleCreateRipples}
        onMouseup={handleMouseUp}
      >
        <span class={styles.text}>{slots.default ? slots.default() : ""}</span>
      </button>
    );
  },
});
