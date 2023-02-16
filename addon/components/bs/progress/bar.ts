import BsBaseComponent from '../base';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import { htmlSafe } from '@ember/template';

import type { SafeString } from '@ember/template/-private/handlebars';

export interface BsProgressBarComponentSignature {
  Element: HTMLDivElement;
  Args: {
    value: number;
    color?: string;
    labeled?: boolean;
    striped?: boolean;
    animated?: boolean;
  };
}

export default class BsProgressBarComponent extends BsBaseComponent<BsProgressBarComponentSignature> {
  constructor(owner: unknown, args: BsProgressBarComponentSignature['Args']) {
    super(owner, args);
    assert(
      '<Bs::Progress::Bar />: Must pass a value number',
      typeOf(this.args.value) === 'number'
    );
  }

  get style(): SafeString {
    return htmlSafe(`width: ${this.args.value}%;`);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Bs::Progress::Bar': typeof BsProgressBarComponent;
    'bs/progress/bar': typeof BsProgressBarComponent;
  }
}
