import BsBaseComponent from '../base';

export interface BsModalBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsModalBodyComponent extends BsBaseComponent<BsModalBodyComponentSignature> {}
