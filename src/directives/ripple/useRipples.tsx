import { onMounted, onUnmounted } from "vue";

import Ripple from "./Ripple.vue";

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
    // 确保容器适合用于定位
    const position = options.container.style.position;
    if (!position || position === "static") {
      options.container.style.position = "relative";
    }

    // 获取鼠标在容器中的坐标
    const x = e.offsetX;
    const y = e.offsetY;

    // 计算水波半径
    const { top, bottom, left, right } =
      options.container.getBoundingClientRect();
    const containerHeight = bottom - top;
    const containerWidht = right - left;
    const radius = Math.sqrt(
      Math.pow(containerHeight, 2) + Math.pow(containerWidht, 2)
    );

    // 创建水波元素
    const ripple = new Ripple();
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
