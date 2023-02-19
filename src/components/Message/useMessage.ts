import { createVNode, render } from "vue";

import MessagesContainer from "./EzMessagesContainer.vue";
import BaseMessage from "./EzBaseMessage.vue";

export default function useMessage() {
  function createMessagesContainer(): HTMLDivElement {
    const id = "vue-material";
    const container = document.getElementById(id);
    if (!container) {
      render(createVNode(MessagesContainer, { id }), document.body);
    }
    return document.getElementById(id) as HTMLDivElement;
  }

  function message(options: { text: string; duration?: number }) {
    const container = createMessagesContainer();

    const wrapper = document.createElement("div");
    container.appendChild(wrapper);
    const vNode = createVNode(BaseMessage, {
      text: options.text,
    });
    render(vNode, wrapper);
    setTimeout(() => {
      wrapper.remove();
    }, options.duration ?? 2000);
  }

  return {
    message,
  };
}
