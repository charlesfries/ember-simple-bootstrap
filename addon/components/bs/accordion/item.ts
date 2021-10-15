import BsBaseComponent from '../base';

import type BsAccordionComponent from '../accordion';

export interface BsAccordionItemComponentArgs {
  accordion: BsAccordionComponent;
  show?: boolean;
}

export default class BsAccordionItemComponent<
  Args extends BsAccordionItemComponentArgs = BsAccordionItemComponentArgs
> extends BsBaseComponent<Args> {}
