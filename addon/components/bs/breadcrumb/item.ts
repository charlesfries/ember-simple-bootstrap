import BsBaseComponent from '../base';

export interface BsBreadcrumbItemComponentSignature {
  Args: {
    current?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsBreadcrumbItemComponent extends BsBaseComponent<BsBreadcrumbItemComponentSignature> {}
