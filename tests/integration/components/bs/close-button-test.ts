import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/close-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Bs::CloseButton @white={{true}} />`);

    assert.dom(this.element as Element).hasText('');
    assert.dom('.btn-close').hasClass('btn-close-white');
  });
});
