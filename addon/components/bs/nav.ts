import BsBaseComponent from './base';

export interface BsNavComponentArgs {
  tabs?: boolean;
  pills?: boolean;
}

export default class BsNavComponent extends BsBaseComponent<BsNavComponentArgs> {}
