import BsBaseComponent from './base';

import type BsBreadcrumbItemComponent from './breadcrumb/item';
import type { WithBoundArgs } from '@glint/template';

export interface BsBreadcrumbComponentSignature {
  Element: HTMLElement;
  Blocks: {
    default: [
      {
        item: WithBoundArgs<typeof BsBreadcrumbItemComponent, never>;
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
