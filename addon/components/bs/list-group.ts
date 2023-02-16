import BsBaseComponent from './base';

export interface BsListGroupComponentSignature {
  Args: {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean;
    color?: string;
  };
}

export default class BsListGroupComponent extends BsBaseComponent<BsListGroupComponentSignature> {}
