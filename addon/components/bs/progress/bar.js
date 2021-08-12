import BsBaseComponent from '../base';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

/**
 * ARGS
 * value: number;
 * color?: string;
 * labeled?: boolean;
 * striped?: boolean;
 * animated?: boolean;
 */

export default class BsProgressBarComponent extends BsBaseComponent {
	constructor() {
		super(...arguments);
		assert('<Bs::Progress::Bar />: Must pass a value number', typeOf(this.args.value) === 'number');
	}
}
