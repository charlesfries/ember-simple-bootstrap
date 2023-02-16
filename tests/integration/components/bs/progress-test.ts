import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/progress', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('value', 25);

    await render(hbs`
      {{! @glint-nocheck }}
      <Bs::Progress as |progress|>
        <progress.bar @value={{this.value}} />
      </Bs::Progress>
    `);

    assert.dom('.progress').exists();
    assert.dom('.progress-bar').exists({ count: 1 });
    assert.dom('.progress-bar').hasAttribute('style', 'width: 25%;');
  });
});
