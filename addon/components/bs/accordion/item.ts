import BsBaseComponent from '../base';

import type BsAccordionComponent from '../accordion';
import type BsAccordionButtonComponent from './button';
import type BsAccordionBodyComponent from './body';
import type { WithBoundArgs } from '@glint/template';

export interface BsAccordionItemComponentSignature {
  Element: HTMLElement;
  Args: {
    accordion: BsAccordionComponent;
    show?: boolean;
  };
  Blocks: {
    default: [
      {
        button?: WithBoundArgs<
          typeof BsAccordionButtonComponent,
          'item' | 'show'
        >;
        body?: WithBoundArgs<typeof BsAccordionBodyComponent, never>;
      }
    ];
  };
}

export default class BsAccordionItemComponent extends BsBaseComponent<BsAccordionItemComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Accordion::Item': typeof BsAccordionItemComponent;
    'bs/accordion/item': typeof BsAccordionItemComponent;
  }
}
