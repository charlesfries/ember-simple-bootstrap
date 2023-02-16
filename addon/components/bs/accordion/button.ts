import BsBaseComponent from '../base';

// import type BsAccordionItemComponent from './item';

export interface BsAccordionButtonComponentSignature {
  Element: HTMLElement;
  Args: {
    // item: BsAccordionItemComponent;
    show?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsAccordionButtonComponent extends BsBaseComponent<BsAccordionButtonComponentSignature> {}
