ember-simple-bootstrap
==============================================================================

This addon aims to be a close representation of the latest Bootstrap features and components.

This addon is only compatible with Boostrap 5+.

⚠️ This addon is a work-in-progress. Pull requests are absolutely welcome.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

First, install peer dependencies:

```
ember install ember-cli-sass
npm install --save-dev bootstrap
```

Include the JavaScript:

```js
// ember-cli-build.js
app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
```

Include the styles:

```scss
// app.scss
@import "node_modules/bootstrap/scss/bootstrap";
```

Finally, install the addon:

```
ember install ember-simple-bootstrap
```


Usage
------------------------------------------------------------------------------

```hbs
<Bs::Accordion />
<Bs::Alert />
<Bs::Breadcrumb />
<Bs::Button />
<Bs::Card />
<Bs::Dropdown />
<Bs::ListGroup />
<Bs::Modal />
<Bs::Nav />
<Bs::Offcanvas />
<Bs::Pagination />
<Bs::Progress />
<Bs::Spinner />
<Bs::Toast />
<Bs::Toolbar />
```


Examples
------------------------------------------------------------------------------

Accordion

```hbs
<Bs::Accordion as |accordion|>
  <accordion.item as |item|>
    <item.button>My Title</item.button>
    <item.body>My Body</item.body>
  </accordion.item>
</Bs::Accordion>
```

Alerts

```hbs
<Bs::Alert @color="primary">A simple primary alert—check it out!</Bs::Alert>
```

Buttons

```hbs
<Bs::Button @onClick={{this.go}}>My Button</Bs::Button>
<Bs::Button @size="sm" @disabled={{true}} @loading={{false}} @onClick={{this.go}}>My Button</Bs::Button>
```

Card

```hbs
<Bs::Card as |card|>
  <card.header @title="Card title" />
  <card.body>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </card.body>
</Bs::Card>
```

Dropdowns

```hbs
<Bs::Button {{dropdown}}>Open</Bs::Button>
<Bs::Dropdown @align="right" @linger={{true}} as |dropdown|>
  <dropdown.item @label="My Item" @onClick={{this.go}} />
  <dropdown.divider />
</Bs::Dropdown>
```

List group

```hbs
<Bs::ListGroup @flush={{true}} as |listGroup|>
  <listGroup.item>My Item</listGroup.item>
</Bs::ListGroup>
```

Modal

```hbs
{{#if this.showModal}}
  <Bs::Modal @title="Modal title" @onClose={{fn (mut this.showModal) false}} as |modal|>
    <modal.body>
      <p>Modal body text goes here.</p>
    </modal.body>
  	<modal.footer>
      <Bs::Button @color="secondary" @onClick={{fn (mut this.showModal) false}}>Cancel</Bs::Button>
      <Bs::Button @color="primary" @onClick={{this.save}}>Save changes</Bs::Button>
    </modal.footer>
  </Bs::Modal>
{{/if}}
```

Navs

```hbs
<Bs::Nav as |nav|>
  <nav.link-to @route="link1">Link 1</nav.link-to>
  <nav.link-to @route="link2">Link 2</nav.link-to>
  <nav.link-to @route="link3">Link 3</nav.link-to>
</Bs::Nav>
```

Offcanvas

```hbs
{{#if this.showOffcanvas}}
  <Bs::Offcanvas @placement="end" @onClose={{fn (mut this.showOffcanvas) false}} as |offcanvas|>
    <offcanvas.header @title="My Title" />
    <offcanvas.body>My Body</offcanvas.body>
  </Bs::Offcanvas>
{{/if}}
```

Pagination

```hbs
<Bs::Pagination @curPage={{this.currentPage}} @perPage={{10}} @totalItems={{100}} @onNext={{fn (mut this.currentPage) (inc this.currentPage)}} @onPrevious={{fn (mut this.currentPage) (dec this.currentPage)}} @onSelect={{fn (mut this.currentPage)}} />
```

Progress

```hbs
<Bs::Progress as |progress|>
  <progress.bar @value={{0}} />
</Bs::Progress>
<Bs::Progress as |progress|>
  <progress.bar @value={{25}} />
</Bs::Progress>
<Bs::Progress as |progress|>
  <progress.bar @value={{50}} @color="success" />
</Bs::Progress>
<Bs::Progress as |progress|>
  <progress.bar @value={{25}} />
  <progress.bar @value={{25}} @color="success" />
  <progress.bar @value={{25}} @color="info" />
</Bs::Progress>
<Bs::Progress as |progress|>
  <progress.bar @value={{50}} @striped={{true}} @animated={{true}} />
</Bs::Progress>
```

Spinners

```hbs
<Bs::Spinner />
<Bs::Spinner @centered={{true}} />
<Bs::Spinner @color="success" />
```

Toasts

```hbs
<Bs::Toast as |toast|>
  <toast.header></toast.header>
  <toast.body></toast.body>
</Bs::Toast>
```

Toolbars

```hbs
<Bs::Toolbar @size="sm" as |toolbar|>
  <toolbar.group as |group|>
    <group.button @color="primary" @onClick={{this.done}}>Done</group.button>
  </toolbar.group>
</Bs::Toolbar>
```

Tooltips

```hbs
<Bs::Button {{tooltip "Tooltip on top"}} @onClick={{this.go}}>
  Tooltip on top
</Bs::Button>
<Bs::Button {{tooltip "Tooltip on right" placement="right"}} @onClick={{this.go}}>
  Tooltip on right
</Bs::Button>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
