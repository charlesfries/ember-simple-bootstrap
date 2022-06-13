import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/accordion', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Bs::Accordion as |accordion|>
        <accordion.item as |item|>
          <item.button>Accordion Item #1</item.button>
          <item.body>First</item.body>
        </accordion.item>
        <accordion.item as |item|>
          <item.button>Accordion Item #2</item.button>
          <item.body>Second</item.body>
        </accordion.item>
        <accordion.item as |item|>
          <item.button>Accordion Item #3</item.button>
          <item.body>Third</item.body>
        </accordion.item>
      </Bs::Accordion>
    `);

    assert
      .dom(this.element as Element)
      .hasText(
        'Accordion Item #1 First Accordion Item #2 Second Accordion Item #3 Third'
      );
  });
});
