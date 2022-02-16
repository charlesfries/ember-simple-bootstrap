import BsBaseComponent from './base';
import { Modal } from 'bootstrap';
import { action } from '@ember/object';

export interface BsModalComponentArgs {
  title?: string;
  size?: 'sm' | 'lg' | 'xl';
  static?: boolean;
  keyboard?: boolean;
  focus?: boolean;
  scroll?: boolean;
  fullscreen?: boolean;
  hideClose?: boolean;
  onClose: () => void;
}

export default class BsModalComponent extends BsBaseComponent<BsModalComponentArgs> {
  modal?: Modal;

  @action didInsert(element: Element): void {
    this.modal = new Modal(element, {
      backdrop: this.args.static ? 'static' : true,
      keyboard: this.args.keyboard ?? true,
      focus: this.args.focus ?? true,
    });
    this.modal.show();

    element.addEventListener('shown.bs.modal', () => {
      const autofocus = element.querySelector(
        '[autofocus]'
      ) as HTMLInputElement;
      if (autofocus) {
        autofocus.focus();
      }
    });

    element.addEventListener('hidden.bs.modal', () => {
      this.args.onClose();
    });
  }

  willDestroy(): void {
    if (this.modal) {
      this.modal.hide();
      // this.modal.dispose();
    }
  }
}
