import BsBaseComponent from './base';

export interface BsSpinnerComponentArgs {
	centered?: boolean;
	large?: boolean;
	color?: 'primary' | 'secondary'; // = 'secondary'
}

export default class BsSpinnerComponent<Args extends BsSpinnerComponentArgs = BsSpinnerComponentArgs> extends BsBaseComponent<Args> {}
