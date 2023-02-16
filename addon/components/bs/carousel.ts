import BsBaseComponent from './base';

export interface BsCarouselComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsCarouselComponent extends BsBaseComponent<BsCarouselComponentSignature> {}
