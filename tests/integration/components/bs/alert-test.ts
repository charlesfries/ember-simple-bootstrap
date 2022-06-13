import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/alert', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Bs::Alert @color="success">
        Test
      </Bs::Alert>
    `);

    assert.dom(this.element as Element).hasText('Test');
    assert.dom('.alert').hasClass('alert-success');
  });
});
