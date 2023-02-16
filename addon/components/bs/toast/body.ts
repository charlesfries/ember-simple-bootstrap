import BsBaseComponent from '../base';

export interface BsToastBodyComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsToastBodyComponent extends BsBaseComponent<BsToastBodyComponentSignature> {}
