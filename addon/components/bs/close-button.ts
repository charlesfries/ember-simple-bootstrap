import BsBaseComponent from './base';

export interface BsCloseButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    white?: boolean;
  };
}

export default class BsCloseButtonComponent extends BsBaseComponent<BsCloseButtonComponentSignature> {}
