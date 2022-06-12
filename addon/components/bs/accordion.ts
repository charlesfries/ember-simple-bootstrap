import BsBaseComponent from './base';

export interface BsAccordionComponentArgs {
  flush?: boolean;
  alwaysOpen?: boolean;
}

export default class BsAccordionComponent extends BsBaseComponent<BsAccordionComponentArgs> {}
