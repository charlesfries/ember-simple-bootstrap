import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/modal/footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Modal::Footer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Modal::Footer>
        template block text
      </Bs::Modal::Footer>
    `);

    assert.dom().hasText('template block text');
  });
});
