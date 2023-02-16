import BsBaseComponent from '../base';

export interface BsCardFooterComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsCardFooterComponent extends BsBaseComponent<BsCardFooterComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Card::Footer': typeof BsCardFooterComponent;
    'bs/card/footer': typeof BsCardFooterComponent;
  }
}
