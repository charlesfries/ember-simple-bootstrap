import BsBaseComponent from '../base';

export interface BsBreadcrumbItemComponentSignature {
  Element: HTMLElement;
  Args: {
    current?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsBreadcrumbItemComponent extends BsBaseComponent<BsBreadcrumbItemComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Breadcrumb::Item': typeof BsBreadcrumbItemComponent;
    'bs/breadcrumb/item': typeof BsBreadcrumbItemComponent;
  }
}
