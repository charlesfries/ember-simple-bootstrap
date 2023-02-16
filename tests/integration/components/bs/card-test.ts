import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Bs::Card as |card|>
        <card.header>
          Header
        </card.header>
        <card.body>
          Body
        </card.body>
      </Bs::Card>
    `);

    assert.dom().hasText('Header Body');
    assert.dom('.card .card-header').exists();
    assert.dom('.card .card-body').exists();
  });
});
