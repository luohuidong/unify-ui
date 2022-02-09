import { createApp, ref } from "vue";
import type { App } from "vue";

import BaseDialog from "./BaseDialog.vue";

interface ConfirmOptions {
  title: string;
  supportingText: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void | Promise<void>;
}

interface ReturnData {
  confirm: (options: ConfirmOptions) => void;
}

export default function useConfirm(): ReturnData {
  const containers = ref<HTMLElement[]>([]);
  const apps = ref<App[]>([]);

  function destoryDialog() {
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
    apps.value.push(app);
  }

  function confirm(options: ConfirmOptions) {
    const container = createContainer();

    async function handleConfirm() {
      await options.onConfirm();
      destoryDialog();
    }

    async function handleCancel() {
      options.onCancel && (await options.onCancel());
      destoryDialog();
    }

    const Dialog = (
      <BaseDialog
        visible={true}
        title={options.title}
        supportingText={options.supportingText}
        onClick:confirm-button={handleConfirm}
        onClick:cancel-button={handleCancel}
      />
    );

    mountComponent(container, Dialog);
  }

  return {
    confirm,
  };
}
