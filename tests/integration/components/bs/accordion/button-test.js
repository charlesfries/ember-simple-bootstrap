import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/accordion/button', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Bs::Accordion::Button />`);

		assert.dom(this.element).hasText('');

		// Template block usage:
		await render(hbs`
      <Bs::Accordion::Button>
        template block text
      </Bs::Accordion::Button>
    `);

		assert.dom(this.element).hasText('template block text');
	});
});
