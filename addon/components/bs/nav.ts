import BsBaseComponent from './base';

export interface BsNavComponentSignature {
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentSignature> {}
