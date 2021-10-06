import { defineComponent } from "vue";
import styles from "./ripple.module.scss";

export default defineComponent({
  name: "Ripple",
  setup(props, { slots }) {
    return () => (
      <div class={styles.rippleSibilingNode}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
