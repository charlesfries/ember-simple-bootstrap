import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsModalComponentArgs {
  title?: string;
  size?: 'sm' | 'lg' | 'xl';
  static?: boolean;
  scroll?: boolean;
  fullscreen?: boolean;
  hideClose?: boolean;
  onClose: () => void;
}

interface Modal {
  toggle: () => void;
  show: () => void;
  hide: () => void;
  handleUpdate: () => void;
  dispose: () => void;
}

export default class BsModalComponent extends BsBaseComponent<BsModalComponentArgs> {
  modal?: Modal;

  @action didInsert(element: Element): void {
    // @ts-ignore
    this.modal = new bootstrap.Modal(element, {
      backdrop: this.args.static ? 'static' : true,
    });
    this.modal!.show();

    element.addEventListener('shown.bs.modal', () => {
      const autofocus = element.querySelector('[autofocus]') as HTMLInputElement;
      if (autofocus) {
        autofocus.focus();
      }
    });

    element.addEventListener('hidden.bs.modal', () => {
      this.args.onClose();
    });
  }

  willDestroy(): void {
    this.modal!.hide();
    // this.modal.dispose();
  }
}
