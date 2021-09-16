import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

export interface BsOffcanvasComponentArgs {
  placement?: 'start' | 'end' | 'bottom';
  onClose?: () => void;
}

interface Offcanvas {
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

export default class BsOffcanvasComponent extends BsBaseComponent<BsOffcanvasComponentArgs> {
  offcanvas?: Offcanvas;

  @action didInsert(element: Element): void {
    // @ts-ignore
    this.offcanvas = new bootstrap.Offcanvas(element, {});
    this.offcanvas!.show();

    const { onClose } = this.args;
    if (onClose) {
      element.addEventListener('hidden.bs.offcanvas', () => {
        onClose();
      });
    }
  }

  willDestroy(): void {
    this.offcanvas!.hide();
  }
}
