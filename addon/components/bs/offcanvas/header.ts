import BsBaseComponent from '../base';

export interface BsOffcanvasHeaderComponentSignature {
  Element: HTMLElement;
  Args: {
    title: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsOffcanvasHeaderComponent extends BsBaseComponent<BsOffcanvasHeaderComponentSignature> {}
