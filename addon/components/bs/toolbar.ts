import BsBaseComponent from './base';

export interface BsToolbarComponentArgs {
  size?: 'sm' | 'lg';
}

export default class BsToolbarComponent<Args extends BsToolbarComponentArgs = BsToolbarComponentArgs> extends BsBaseComponent<Args> {}
