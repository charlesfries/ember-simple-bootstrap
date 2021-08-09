import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class BsBaseComponent extends Component {
	get id() {
		return guidFor(this);
	}
}
