import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/breadcrumb/item', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Bs::Breadcrumb::Item />`);

		assert.dom(this.element).hasText('');

		// Template block usage:
		await render(hbs`
      <Bs::Breadcrumb::Item>
        template block text
      </Bs::Breadcrumb::Item>
    `);

		assert.dom(this.element).hasText('template block text');
	});
});