import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, TestContext, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

interface Context extends TestContext {
  curPage: number;
}

module('Integration | Component | bs/pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: Context, assert) {
    this.set('curPage', 0);
    this.set('perPage', 5);
    this.set('totalItems', 21);
    this.set('next', () => {
      this.set('curPage', this.curPage + 1);
    });
    this.set('previous', () => {
      this.set('curPage', this.curPage - 1);
    });
    this.set('select', (page: number) => {
      this.set('curPage', page);
    });

    await render(hbs`
      <Bs::Pagination
        @curPage={{this.curPage}}
        @perPage={{this.perPage}}
        @totalItems={{this.totalItems}}
        @onNext={{this.next}}
        @onPrevious={{this.previous}}
        @onSelect={{this.select}}
      />
    `);

    assert.dom('nav').exists();
    assert.dom('nav .pagination').exists();
    assert.dom('nav .pagination .page-item').exists({ count: 7 });
    assert.dom(this.element as Element).hasText('Previous 1 2 3 4 5 Next');
    console.log(document.querySelector('[data-test-previous]'));
    assert.dom('.page-item:nth-child(1)').hasClass('disabled');

    await click('[data-test-next]');
    assert.strictEqual(this.curPage, 1);

    await click('[data-test-previous]');
    assert.strictEqual(this.curPage, 0);

    await click('.page-item:nth-child(6) .page-link');
    assert.strictEqual(this.curPage, 4);
    assert.dom('.page-item:nth-child(7)').hasClass('disabled');
  });
});
