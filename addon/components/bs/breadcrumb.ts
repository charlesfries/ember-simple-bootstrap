import BsBaseComponent from './base';

import type BsBreadcrumbItemComponent from './breadcrumb/item';

export interface BsBreadcrumbComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [
      {
        item: typeof BsBreadcrumbItemComponent;
      }
    ];
  };
}

export default class BsBreadcrumbComponent extends BsBaseComponent<BsBreadcrumbComponentSignature> {}
