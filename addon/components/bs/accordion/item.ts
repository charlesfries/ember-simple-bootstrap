import BsBaseComponent from '../base';

import type BsAccordionComponent from '../accordion';
import type BsAccordionButtonComponent from './button';
import type BsAccordionBodyComponent from './body';

export interface BsAccordionItemComponentSignature {
  Element: HTMLElement;
  Args: {
    accordion?: BsAccordionComponent;
    show?: boolean;
  };
  Blocks: {
    default: [
      {
        button: typeof BsAccordionButtonComponent;
        body: typeof BsAccordionBodyComponent;
      }
    ];
  };
}

export default class BsAccordionItemComponent extends BsBaseComponent<BsAccordionItemComponentSignature> {}
