import BsBaseComponent from '../base';

export interface BsModalBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsModalBodyComponent extends BsBaseComponent<BsModalBodyComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Modal::Body': typeof BsModalBodyComponent;
    'bs/modal/body': typeof BsModalBodyComponent;
  }
}
