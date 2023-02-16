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
