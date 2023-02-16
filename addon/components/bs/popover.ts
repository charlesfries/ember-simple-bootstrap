import BsBaseComponent from './base';
import { Popover } from 'bootstrap';
import { action } from '@ember/object';

export interface BsPopoverComponentSignature {
  Blocks: {
    default: [];
  };
}

export default class BsPopoverComponent extends BsBaseComponent<BsPopoverComponentSignature> {
  popover?: Popover;

  @action didInsert(element: Element): void {
    const contentEl = document.getElementById(this.id);
    if (!contentEl) {
      return;
    }

    const options: Partial<Popover.Options> = {
      content: contentEl,
      delay: 250,
      html: true,
      trigger: 'hover',
    };

    this.popover = new Popover(element, options);
  }

  willDestroy(): void {
    if (this.popover) {
      this.popover.dispose();
    }
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Popover': typeof BsPopoverComponent;
  }
}
