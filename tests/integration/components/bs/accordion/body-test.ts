import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/accordion/body', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bs::Accordion::Body />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Bs::Accordion::Body>
        template block text
      </Bs::Accordion::Body>
    `);

    assert.dom().hasText('template block text');
  });
});
