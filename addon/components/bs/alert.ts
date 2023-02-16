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

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Alert': typeof BsAlertComponent;
  }
}
