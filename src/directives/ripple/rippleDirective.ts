import type { Directive } from "vue";

function handleClick(e: MouseEvent) {
  // 获取鼠标在容器中的坐标
  const x = e.offsetX;
  const y = e.offsetY;
}

export const vRipple: Directive<
  HTMLElement,
  {
    rippleColor: string;
  }
> = {
  mounted(el) {
    el.addEventListener("click", handleClick);

    // 确保容器适合用于定位
    const position = el.style.position;
    if (!position || position === "static") {
      el.style.position = "relative";
    }

    // 计算水波半径
    const { top, bottom, left, right } = el.getBoundingClientRect();
    const containerHeight = bottom - top;
    const containerWidht = right - left;
    const radius = Math.sqrt(
      Math.pow(containerHeight, 2) + Math.pow(containerWidht, 2)
    );
  },
  beforeUnmount(el) {
    el.removeEventListener("click", handleClick);
  },
};
