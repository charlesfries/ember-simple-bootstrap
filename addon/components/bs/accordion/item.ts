import BsBaseComponent from '../base';

import type BsAccordionComponent from '../accordion';

export interface BsAccordionItemComponentSignature {
  Args: {
    accordion: BsAccordionComponent;
    show?: boolean;
  };
}

export default class BsAccordionItemComponent extends BsBaseComponent<BsAccordionItemComponentSignature> {}
