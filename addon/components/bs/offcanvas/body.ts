import BsBaseComponent from '../base';

export interface BsOffcanvasBodyComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsOffcanvasBodyComponent extends BsBaseComponent<BsOffcanvasBodyComponentSignature> {}
