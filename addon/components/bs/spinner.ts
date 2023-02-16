import BsBaseComponent from './base';

export interface BsSpinnerComponentSignature {
  Element: HTMLDivElement;
  Args: {
    centered?: boolean;
    large?: boolean;
    color?: string;
  };
}

export default class BsSpinnerComponent extends BsBaseComponent<BsSpinnerComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Spinner': typeof BsSpinnerComponent;
  }
}
