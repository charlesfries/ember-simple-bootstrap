import BsBaseComponent from '../base';

import type BsAccordionItemComponent from './item';

export interface BsAccordionButtonComponentSignature {
  Element: HTMLElement;
  Args: {
    item: BsAccordionItemComponent;
    show?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsAccordionButtonComponent extends BsBaseComponent<BsAccordionButtonComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Accordion::Button': typeof BsAccordionButtonComponent;
    'bs/accordion/button': typeof BsAccordionButtonComponent;
  }
}
