import BsBaseComponent from './base';

export interface BsNavComponentSignature {
  Element: HTMLElement;
  Args: {
    tabs?: boolean;
    pills?: boolean;
  };
  Blocks: {
    default: [
      {
        'link-to': any;
      }
    ];
  };
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentSignature> {}
