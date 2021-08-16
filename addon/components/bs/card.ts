import BsBaseComponent from './base';

export interface BsCardComponentArgs {}

export default class BsCardComponent<Args extends BsCardComponentArgs = BsCardComponentArgs> extends BsBaseComponent<Args> {}
