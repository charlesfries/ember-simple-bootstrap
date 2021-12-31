import BsBaseComponent from './base';
import { action } from '@ember/object';
/* global bootstrap */

interface Popover {
  show: () => void;
  hide: () => void;
  toggle: () => void;
  dispose: () => void;
  enable: () => void;
  disable: () => void;
  toggleEnabled: () => void;
  update: () => void;
}

export default class BsPopoverComponent extends BsBaseComponent {
  popover?: Popover;

  @action didInsert(element: Element): void {
    const contentEl = document.getElementById(this.id);

    const options = {
      content: contentEl,
      delay: 250,
      html: true,
      trigger: 'hover',
    };

    // @ts-ignore
    this.modal = new bootstrap.Popover(element, options);
  }

  willDestroy(): void {
    if (this.popover) {
      this.popover.dispose();
    }
  }
}
