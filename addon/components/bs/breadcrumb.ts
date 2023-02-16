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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Breadcrumb': typeof BsBreadcrumbComponent;
  }
}
