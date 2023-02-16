import BsBaseComponent from '../base';

export interface BsModalFooterComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsModalFooterComponent extends BsBaseComponent<BsModalFooterComponentSignature> {}
