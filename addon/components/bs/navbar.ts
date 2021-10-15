import BsBaseComponent from './base';

export interface BsNavbarComponentArgs {
  expand?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  shade?: 'light' | 'dark';
}

export default class BsNavbarComponent extends BsBaseComponent<BsNavbarComponentArgs> {}
