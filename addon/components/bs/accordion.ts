import BsBaseComponent from './base';

export interface BsAccordionComponentSignature {
  Args: {
    flush?: boolean;
    alwaysOpen?: boolean;
  };
}

export default class BsAccordionComponent extends BsBaseComponent<BsAccordionComponentSignature> {}
