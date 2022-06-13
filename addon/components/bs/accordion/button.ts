import BsBaseComponent from '../base';

import type BsAccordionItemComponent from './item';

export interface BsAccordionButtonComponentArgs {
  item: BsAccordionItemComponent;
  show?: boolean;
}

export default class BsAccordionButtonComponent extends BsBaseComponent<BsAccordionButtonComponentArgs> {}
