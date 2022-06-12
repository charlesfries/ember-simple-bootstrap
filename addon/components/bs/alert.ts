import BsBaseComponent from './base';

export interface BsAlertComponentArgs {
  color?: string;
  icon?: string;
}

export default class BsAlertComponent extends BsBaseComponent<BsAlertComponentArgs> {}
