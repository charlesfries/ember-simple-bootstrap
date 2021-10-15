import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bs/button', function (hooks) {
  setupRenderingTest(hooks);

  test('button has correct classes', async function (assert) {
    await render(hbs`<Bs::Button>Test</Bs::Button>`);

    assert.dom('button').hasClass('btn');
    assert.dom('button').hasClass('btn-secondary');
  });

  test('button has correct size', async function (assert) {
    await render(hbs`<Bs::Button @size="lg">Test</Bs::Button>`);

    assert.dom('button').hasClass('btn-lg');
  });

  test('button has correct color', async function (assert) {
    await render(hbs`<Bs::Button @color="success">Test</Bs::Button>`);

    assert.dom('button').hasClass('btn-success');
  });

  test('button has outline', async function (assert) {
    await render(hbs`<Bs::Button @outline={{true}}>Test</Bs::Button>`);

    assert.dom('button').hasClass('btn-outline-secondary');
  });

  test('button disables', async function (assert) {
    await render(hbs`<Bs::Button @disabled={{true}}>Test</Bs::Button>`);

    assert.dom('button').isDisabled();
  });

  test('button loads', async function (assert) {
    await render(hbs`<Bs::Button @loading={{true}}>Test</Bs::Button>`);

    assert.dom('button').isDisabled();
  });

  test('button can submit', async function (assert) {
    await render(hbs`<Bs::Button @isSubmit={{true}}>Test</Bs::Button>`);

    assert.dom('button').hasAttribute('type', 'submit');
  });
});
