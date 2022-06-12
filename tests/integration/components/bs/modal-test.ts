import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    this.set('close', () => {
      assert.true(true);
    });

    await render(hbs`
      <Bs::Modal @title="Title" @size="lg" @onClose={{this.close}} as |modal|>
        <modal.body>
          Body
        </modal.body>
      </Bs::Modal>
    `);

    assert.dom(this.element).hasText('Title Body');
  });
});
