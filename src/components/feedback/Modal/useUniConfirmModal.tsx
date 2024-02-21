import { createApp, ref } from "vue";
import type { App } from "vue";

import UniBaseModal from "./UniBaseModal.vue";

interface ConfirmOptions {
  title: string;
  supportingText: string;
}

export function useUniConfirmModal() {
  const containers = ref<HTMLElement[]>([]);
  const apps = ref<App[]>([]);

  function destoryModal() {
    apps.value.forEach((app) => {
      app.unmount();
    });
    apps.value = [];

    containers.value.forEach((container) => {
      container.remove();
    });
    containers.value = [];
  }

  function createContainer() {
    const container = document.createElement("div");
    document.body.appendChild(container);
    containers.value.push(container);

    return container;
  }

  function mountComponent(container: HTMLElement, component: JSX.Element) {
    const app = createApp(component);
    app.mount(container);
    apps.value.push(app as any);
  }

  function confirm(options: ConfirmOptions): Promise<"confirm" | "cancel"> {
    return new Promise((resolve, reject) => {
      const container = createContainer();

      function handleConfirm() {
        destoryModal();
        resolve("confirm");
      }

      function handleCancel() {
        destoryModal();
        reject("cancel");
      }

      const Modal = (
        <UniBaseModal
          visible={true}
          title={options.title}
          supportingText={options.supportingText}
          onClick:confirm-button={handleConfirm}
          onClick:cancel-button={handleCancel}
        />
      );

      mountComponent(container, Modal);
    });
  }

  return {
    confirm,
  };
}
