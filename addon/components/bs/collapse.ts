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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Collapse': typeof BsCollapseComponent;
  }
}
