import BsBaseComponent from '../base';

export interface BsToastHeaderComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsToastHeaderComponent extends BsBaseComponent<BsToastHeaderComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Toast::Header': typeof BsToastHeaderComponent;
    'bs/toast/header': typeof BsToastHeaderComponent;
  }
}
