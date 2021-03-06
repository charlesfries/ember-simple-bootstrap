import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/toast', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Toast />`);

    assert.dom(this.element as Element).hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Toast>
        template block text
      </Bs::Toast>
    `);

    assert.dom(this.element as Element).hasText('template block text');
  });
});
