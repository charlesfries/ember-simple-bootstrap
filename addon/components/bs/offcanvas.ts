import BsBaseComponent from './base';
import { Offcanvas } from 'bootstrap';
import { action } from '@ember/object';

import type BsOffcanvasHeaderComponent from './offcanvas/header';
import type BsOffcanvasBodyComponent from './offcanvas/body';

export interface BsOffcanvasComponentSignature {
  Element: HTMLDivElement;
  Args: {
    placement?: 'start' | 'end' | 'bottom';
    onClose?: () => void;
  };
  Blocks: {
    default: [
      {
        header: typeof BsOffcanvasHeaderComponent;
        body: typeof BsOffcanvasBodyComponent;
      }
    ];
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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Offcanvas': typeof BsOffcanvasComponent;
  }
}
