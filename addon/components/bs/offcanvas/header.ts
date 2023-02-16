import BsBaseComponent from '../base';

export interface BsOffcanvasHeaderComponentSignature {
  Element: HTMLDivElement;
  Args: {
    title: string;
  };
}

export default class BsOffcanvasHeaderComponent extends BsBaseComponent<BsOffcanvasHeaderComponentSignature> {}
