import BsBaseComponent from '../base';

export interface BsCardHeaderComponentSignature {
  Element: HTMLElement;
  Args: {
    title?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsCardHeaderComponent extends BsBaseComponent<BsCardHeaderComponentSignature> {}
