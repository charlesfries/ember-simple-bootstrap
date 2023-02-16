import BsBaseComponent from './base';

export interface BsCollapseComponentSignature {
  Element: HTMLDivElement;
  Args: {
    id?: string;
    horizontal?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsCollapseComponent extends BsBaseComponent<BsCollapseComponentSignature> {}
