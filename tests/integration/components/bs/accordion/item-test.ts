import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/accordion/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{! @glint-ignore}}
    <Bs::Accordion::Item />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      {{! @glint-ignore}}
      <Bs::Accordion::Item>
        template block text
      </Bs::Accordion::Item>
    `);

    assert.dom().hasText('template block text template block text');
  });
});
