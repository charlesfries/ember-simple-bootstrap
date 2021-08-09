import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/card/body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Card::Body />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Card::Body>
        template block text
      </Bs::Card::Body>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
