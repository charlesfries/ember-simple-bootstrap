import BsBaseComponent from '../base';

export interface BsModalFooterComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsModalFooterComponent extends BsBaseComponent<BsModalFooterComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Modal::Footer': typeof BsModalFooterComponent;
    'bs/modal/footer': typeof BsModalFooterComponent;
  }
}
