import BsBaseComponent from '../base';

export interface BsCardBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsCardBodyComponent extends BsBaseComponent<BsCardBodyComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Card::Body': typeof BsCardBodyComponent;
    'bs/card/body': typeof BsCardBodyComponent;
  }
}
