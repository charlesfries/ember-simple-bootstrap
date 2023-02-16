import BsBaseComponent from './base';
import { Modal } from 'bootstrap';
import { action } from '@ember/object';

export interface BsModalComponentSignature {
  Args: {
    title?: string;
    size?: 'sm' | 'lg' | 'xl';
    static?: boolean;
    keyboard?: boolean;
    focus?: boolean;
    scroll?: boolean;
    fullscreen?: boolean;
    hideClose?: boolean;
    onClose: () => void;
  };
}

export default class BsModalComponent extends BsBaseComponent<BsModalComponentSignature> {
  modal?: Modal;

  @action didInsert(element: Element): void {
    this.modal = new Modal(element, {
      backdrop: this.args.static ? 'static' : true,
      keyboard: this.args.keyboard ?? true,
      focus: this.args.focus ?? true,
    });

    element.addEventListener('shown.bs.modal', () => {
      if (this.isDestroyed) {
        this.modal?.hide();
      }

      const autofocus = element.querySelector<HTMLInputElement>('[autofocus]');
      if (autofocus) {
        autofocus.focus();
      }
    });

    element.addEventListener('hidden.bs.modal', () => {
      this.args.onClose();
    });

    this.modal.show();
  }

  willDestroy(): void {
    if (this.modal) {
      this.modal.hide();
      // this.modal.dispose();
    }
  }
}
