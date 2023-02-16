import BsBaseComponent from './base';

import type BsAccordionItemComponent from './accordion/item';

export interface BsAccordionComponentSignature {
  Args: {
    flush?: boolean;
    alwaysOpen?: boolean;
  };
  Blocks: {
    default: [{ item: typeof BsAccordionItemComponent }];
  };
}

export default class BsAccordionComponent extends BsBaseComponent<BsAccordionComponentSignature> {}
