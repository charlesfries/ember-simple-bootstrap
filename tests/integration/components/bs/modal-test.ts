import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('close', () => {}); // eslint-disable-line @typescript-eslint/no-empty-function

    await render(hbs`
      <Bs::Modal @title="Title" @size="lg" @onClose={{this.close}} as |modal|>
        <modal.body>
          Body
        </modal.body>
      </Bs::Modal>
    `);

    assert.dom(this.element as Element).hasText('Title Body');
  });
});
