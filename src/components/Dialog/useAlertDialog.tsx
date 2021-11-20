import { createApp, ref } from "vue";
import type { App } from "vue";
import BaseDialog from "./BaseDialog";

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
  const containerRef = ref<HTMLElement>();
  const appRef = ref<App>();

  function destoryDialog() {
    if (appRef.value) {
      appRef.value.unmount();
    }

    if (containerRef.value) {
      containerRef.value.remove();
    }
  }

  function confirm(options: ConfirmOptions) {
    containerRef.value = document.createElement("div");
    document.body.appendChild(containerRef.value);

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

    appRef.value = createApp(Dialog);
    appRef.value.mount(containerRef.value);
  }

  return {
    confirm,
  };
}
