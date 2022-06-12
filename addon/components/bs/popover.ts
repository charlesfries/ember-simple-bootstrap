import BsBaseComponent from './base';
import { Popover } from 'bootstrap';
import { action } from '@ember/object';

export interface BsPopoverComponentArgs {}

export default class BsPopoverComponent extends BsBaseComponent<BsPopoverComponentArgs> {
  popover?: Popover;

  @action didInsert(element: Element): void {
    const contentEl = document.getElementById(this.id);

    const options = {
      content: contentEl,
      delay: 250,
      html: true,
      trigger: 'hover',
    };

    this.popover = new Popover(element, options as any);
  }

  willDestroy(): void {
    if (this.popover) {
      this.popover.dispose();
    }
  }
}
