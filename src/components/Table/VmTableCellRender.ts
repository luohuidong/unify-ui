import { defineComponent, type PropType, type VNode } from "vue";

export default defineComponent({
  name: "STableCellRender",
  props: {
    vNode: {
      type: Function as PropType<() => VNode | null>,
      required: true,
    },
  },
  setup(props) {
    return props.vNode;
  },
});
