import BsBaseComponent from './base';

export interface BsBadgeComponentSignature {
  Element: HTMLElement;
  Args: {
    color?: string;
    pill?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class BsBadgeComponent extends BsBaseComponent<BsBadgeComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Badge': typeof BsBadgeComponent;
  }
}
