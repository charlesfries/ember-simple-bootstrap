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
