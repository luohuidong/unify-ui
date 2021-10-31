import { onMounted, onUnmounted } from "vue";
export { default as RippleSiblingNode } from "./RippleSiblingNode";

import styles from "./ripple.module.scss";

export default function useRipples() {
  let ripples: {
    el: HTMLDivElement;
    createTime: number;
  }[] = [];

  function createRipples(
    e: MouseEvent,
    options: {
      container: HTMLElement;
      rippleColor: string;
    }
  ) {
    const position = options.container.style.position;
    if (!position || position === "static") {
      options.container.style.position = "relative";
    }

    const x = e.offsetX;
    const y = e.offsetY;

    const { top, bottom, left, right } =
      options.container.getBoundingClientRect();
    const containerHeight = bottom - top;
    const containerWidht = right - left;
    const radius = Math.sqrt(
      Math.pow(containerHeight, 2) + Math.pow(containerWidht, 2)
    );

    const ripple = document.createElement("div");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.width = 2 * radius + "px";
    ripple.style.height = 2 * radius + "px";
    ripple.style.backgroundColor = options.rippleColor;
    ripple.className = styles.ripple;
    options.container.appendChild(ripple);

    ripples.push({
      el: ripple,
      createTime: Date.now(),
    });
  }

  function handleRemoveRipples() {
    const tmp = ripples;
    ripples = [];
    tmp.forEach((item) => {
      const diff = Date.now() - item.createTime - 300;
      if (diff <= 0) {
        setTimeout(() => {
          item.el.remove();
        }, Math.abs(diff));
      } else {
        item.el.remove();
      }
    });
  }
  onMounted(() => {
    window.addEventListener("mouseup", handleRemoveRipples);
  });
  onUnmounted(() => {
    window.removeEventListener("mouseup", handleRemoveRipples);
  });

  return {
    createRipples,
  };
}