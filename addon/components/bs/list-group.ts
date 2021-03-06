import BsBaseComponent from './base';

export interface BsListGroupComponentArgs {
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean;
  color?: string;
}

export default class BsListGroupComponent extends BsBaseComponent<BsListGroupComponentArgs> {}
