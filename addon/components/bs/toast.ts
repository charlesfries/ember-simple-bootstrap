import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsToastComponentArgs {
  onClose?: () => void;
}

interface Toast {
  show: () => void;
  hide: () => void;
  dispose: () => void;
}

export default class BsToastComponent extends BsBaseComponent<BsToastComponentArgs> {
  toast?: Toast;

  @action didInsert(element: Element): void {
    // @ts-ignore
    const toast = new bootstrap.Toast(element, {
      autohide: false,
    });
    this.toast = toast;

    toast.show();

    const { onClose } = this.args;
    if (onClose) {
      element.addEventListener('hidden.bs.toast', () => {
        onClose();
      });
    }
  }

  willDestroy(): void {
    this.toast!.hide();
  }
}
