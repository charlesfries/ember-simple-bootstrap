import BsBaseComponent from './base';

export interface BsBadgeComponentArgs {
  pill?: boolean;
  color?: string;
}

export default class BsBadgeComponent extends BsBaseComponent<BsBadgeComponentArgs> {}
