import { defineComponent } from "vue";
import classNames from "classnames";

import styles from "./index.module.scss";

export default defineComponent({
  name: "Scrim",

  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  setup(props, { slots }) {
    return () => (
      <div
        class={classNames([styles.scrim, { [styles.hidden]: !props.visible }])}
      >
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
