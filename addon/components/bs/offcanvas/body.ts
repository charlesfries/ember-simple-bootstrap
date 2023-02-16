import BsBaseComponent from '../base';

export interface BsOffcanvasBodyComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsOffcanvasBodyComponent extends BsBaseComponent<BsOffcanvasBodyComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Offcanvas::Body': typeof BsOffcanvasBodyComponent;
    'bs/offcanvas/body': typeof BsOffcanvasBodyComponent;
  }
}
