import BsBaseComponent from './base';

export interface BsNavbarComponentSignature {
  Args: {
    expand?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    shade?: 'light' | 'dark';
  };
}

export default class BsNavbarComponent extends BsBaseComponent<BsNavbarComponentSignature> {}
