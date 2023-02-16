import BsBaseComponent from './base';
import { Toast } from 'bootstrap';
import { action } from '@ember/object';

export interface BsToastComponentSignature {
  Args: {
    onClose?: () => void;
  };
}

export default class BsToastComponent extends BsBaseComponent<BsToastComponentSignature> {
  toast?: Toast;

  @action didInsert(element: Element): void {
    const toast = new Toast(element, {
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
    if (this.toast) {
      this.toast.hide();
    }
  }
}
