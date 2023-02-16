import BsBaseComponent from './base';

import type BsProgressBarComponent from './progress/bar';

export interface BsProgressComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [
      {
        bar: typeof BsProgressBarComponent;
      }
    ];
  };
}

export default class BsProgressComponent extends BsBaseComponent<BsProgressComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Progress': typeof BsProgressComponent;
  }
}
