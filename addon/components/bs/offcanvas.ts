import BsBaseComponent from './base';
import { Offcanvas } from 'bootstrap';
import { action } from '@ember/object';

export interface BsOffcanvasComponentSignature {
  Args: {
    placement?: 'start' | 'end' | 'bottom';
    onClose?: () => void;
  };
}

export default class BsOffcanvasComponent extends BsBaseComponent<BsOffcanvasComponentSignature> {
  offcanvas?: Offcanvas;

  @action didInsert(element: Element): void {
    this.offcanvas = new Offcanvas(element, this.args as Offcanvas.Options);
    this.offcanvas.show();

    const { onClose } = this.args;
    if (onClose) {
      element.addEventListener('hidden.bs.offcanvas', () => {
        onClose();
      });
    }
  }

  willDestroy(): void {
    if (this.offcanvas) {
      this.offcanvas.hide();
    }
  }
}
