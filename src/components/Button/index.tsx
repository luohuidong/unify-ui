import { defineComponent, PropType, ref, computed } from "vue";

import useRipples, { RippleSiblingNode } from "@/use/useRipples";

import styles from "./index.module.scss";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<"text" | "outlined" | "contained">,
      default: "text",
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const rippleColor = computed(() => {
      let color = "#d4bff9";
      switch (props.type) {
        case "text":
          color = "#d4bff9";
          break;
        case "contained":
          color = "#9965f4";
          break;
        case "outlined":
          color = "#d4bff9";
          break;
        default:
          break;
      }
      return color;
    });
    const button = ref<HTMLButtonElement>();
    const { createRipples } = useRipples();

    function handleClick(e: MouseEvent) {
      emit("click", e);
    }

    function handleMousedown(e: MouseEvent) {
      if (e.currentTarget) {
        createRipples(e, {
          container: e.currentTarget as HTMLButtonElement,
          rippleColor: rippleColor.value,
        });
      }
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
        onMousedown={handleMousedown}
      >
        <RippleSiblingNode>
          <span class={styles.buttonText}>{props.text}</span>
        </RippleSiblingNode>
      </button>
    );
  },
});
