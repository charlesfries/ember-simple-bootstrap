import BsBaseComponent from '../base';

export interface BsCardBodyComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [];
  };
}

export default class BsCardBodyComponent extends BsBaseComponent<BsCardBodyComponentSignature> {}
