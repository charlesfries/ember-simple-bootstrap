import BsBaseComponent from './base';

export interface BsAccordionComponentArgs {
	flush?: boolean;
	alwaysOpen?: boolean;
}

export default class BsAccordionComponent<Args extends BsAccordionComponentArgs = BsAccordionComponentArgs> extends BsBaseComponent<Args> {}
