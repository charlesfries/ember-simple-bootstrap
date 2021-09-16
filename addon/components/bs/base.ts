import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export interface BsBaseComponentArgs {}

export default class BsBaseComponent<Args extends BsBaseComponentArgs = BsBaseComponentArgs> extends Component<Args> {
  get id() {
    return guidFor(this);
  }
}
