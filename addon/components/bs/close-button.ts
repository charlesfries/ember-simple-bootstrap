import BsBaseComponent from './base';

export interface BsCloseButtonComponentSignature {
  Args: {
    white?: boolean;
  };
}

export default class BsCloseButtonComponent extends BsBaseComponent<BsCloseButtonComponentSignature> {}
