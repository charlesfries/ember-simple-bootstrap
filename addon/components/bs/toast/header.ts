import BsBaseComponent from '../base';

export interface BsToastHeaderComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsToastHeaderComponent extends BsBaseComponent<BsToastHeaderComponentSignature> {}
