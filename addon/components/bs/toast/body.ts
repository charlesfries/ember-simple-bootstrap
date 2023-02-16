import BsBaseComponent from '../base';

export interface BsToastBodyComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsToastBodyComponent extends BsBaseComponent<BsToastBodyComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Toast::Body': typeof BsToastBodyComponent;
    'bs/toast/body': typeof BsToastBodyComponent;
  }
}
