import BsBaseComponent from './base';

export interface BsAlertComponentSignature {
  Element: HTMLDivElement;
  Args: {
    color?: string;
    icon?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class BsAlertComponent extends BsBaseComponent<BsAlertComponentSignature> {}
