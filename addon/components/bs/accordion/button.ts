import BsBaseComponent from '../base';

import type BsAccordionItemComponent from './item';

export interface BsAccordionButtonComponentSignature {
  Args: {
    item: BsAccordionItemComponent;
    show?: boolean;
  };
}

export default class BsAccordionButtonComponent extends BsBaseComponent<BsAccordionButtonComponentSignature> {}
