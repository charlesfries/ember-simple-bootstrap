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
