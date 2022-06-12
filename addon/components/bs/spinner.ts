import BsBaseComponent from './base';

export interface BsSpinnerComponentArgs {
  centered?: boolean;
  large?: boolean;
  color?: string;
}

export default class BsSpinnerComponent extends BsBaseComponent<BsSpinnerComponentArgs> {}
