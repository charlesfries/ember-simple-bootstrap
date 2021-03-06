import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/button-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Bs::ButtonGroup as |group|>
        <group.button
          @color="primary"
          @onClick={{fn (mut this.xyz)}}
        >Left</group.button>
        <group.button
          @color="primary"
          @onClick={{fn (mut this.xyz)}}
        >Middle</group.button>
        <group.button
          @color="primary"
          @onClick={{fn (mut this.xyz)}}
        >Right</group.button>
      </Bs::ButtonGroup>
    `);

    assert.dom(this.element as Element).hasText('Left Middle Right');
  });
});
