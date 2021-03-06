import BsBaseComponent from '../base';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

export interface BsProgressBarComponentArgs {
  value: number;
  color?: string;
  labeled?: boolean;
  striped?: boolean;
  animated?: boolean;
}

export default class BsProgressBarComponent<
  Args extends BsProgressBarComponentArgs = BsProgressBarComponentArgs
> extends BsBaseComponent<Args> {
  constructor(owner: unknown, args: Args) {
    super(owner, args);
    assert(
      '<Bs::Progress::Bar />: Must pass a value number',
      typeOf(this.args.value) === 'number'
    );
  }
}
