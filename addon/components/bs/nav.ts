import BsBaseComponent from './base';

export interface BsNavComponentSignature {
  Element: HTMLElement;
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentSignature> {}
