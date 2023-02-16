import BsBaseComponent from './base';

export interface BsToolbarComponentSignature {
  Args: {
    size?: 'sm' | 'lg';
  };
}

export default class BsToolbarComponent extends BsBaseComponent<BsToolbarComponentSignature> {}
