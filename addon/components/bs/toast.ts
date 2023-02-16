import BsBaseComponent from './base';
import { Toast } from 'bootstrap';
import { action } from '@ember/object';

import type BsToastHeaderComponent from './toast/header';
import type BsToastBodyComponent from './toast/body';

export interface BsToastComponentSignature {
  Element: HTMLElement;
  Args: {
    onClose?: () => void;
  };
  Blocks: {
    default: [
      {
        header: typeof BsToastHeaderComponent;
        body: typeof BsToastBodyComponent;
      }
    ];
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Toast': typeof BsToastComponent;
  }
}
