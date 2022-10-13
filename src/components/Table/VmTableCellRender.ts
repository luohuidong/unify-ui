import { defineComponent, type PropType, type VNode } from "vue";

export default defineComponent({
  name: "VmTableCellRender",
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
