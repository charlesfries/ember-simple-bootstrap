import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/progress/bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('value', 25);

    await render(hbs`
      {{! @glint-ignore }}
      <Bs::Progress::Bar @value={{this.value}} />
    `);

    assert.dom('.progress-bar').exists();
    assert.dom('.progress-bar').hasAttribute('style', 'width: 25%;');
  });
});
