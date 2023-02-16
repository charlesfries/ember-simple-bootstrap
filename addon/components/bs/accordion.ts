import BsBaseComponent from './base';

import type { WithBoundArgs } from '@glint/template';
import type BsAccordionItemComponent from './accordion/item';

export interface BsAccordionComponentSignature {
  Element: HTMLDivElement;
  Args: {
    flush?: boolean;
    alwaysOpen?: boolean;
  };
  Blocks: {
    default: [
      { item: WithBoundArgs<typeof BsAccordionItemComponent, 'accordion'> }
    ];
  };
}

export default class BsAccordionComponent extends BsBaseComponent<BsAccordionComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Accordion': typeof BsAccordionComponent;
  }
}
