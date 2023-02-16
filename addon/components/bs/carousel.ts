import BsBaseComponent from './base';

export interface BsCarouselComponentSignature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class BsCarouselComponent extends BsBaseComponent<BsCarouselComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Carousel': typeof BsCarouselComponent;
  }
}
