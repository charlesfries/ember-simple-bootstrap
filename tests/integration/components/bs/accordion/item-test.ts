import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/accordion/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Accordion::Item />`);

    assert.dom(this.element as Element).hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Accordion::Item>
        template block text
      </Bs::Accordion::Item>
    `);

    assert
      .dom(this.element as Element)
      .hasText('template block text template block text');
  });
});
