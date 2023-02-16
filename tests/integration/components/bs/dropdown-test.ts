import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Dropdown />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Dropdown>
        template block text
      </Bs::Dropdown>
    `);

    assert.dom().hasText('template block text');
  });
});
