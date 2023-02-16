import BsBaseComponent from './base';

export interface BsSpinnerComponentSignature {
  Args: {
    centered?: boolean;
    large?: boolean;
    color?: string;
  };
}

export default class BsSpinnerComponent extends BsBaseComponent<BsSpinnerComponentSignature> {}
