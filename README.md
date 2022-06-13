# ember-simple-bootstrap

This addon aims to be a near carbon copy representation of the latest Bootstrap features and components, using Ember components and modifiers.

This addon is only compatible with Boostrap 5+.

⚠️ This addon is a work in progress. Pull requests are absolutely welcome.


## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


## Installation

First, install the addon:

```
ember install ember-simple-bootstrap
```

Import Bootstrap JavaScript:

```js
// app/app.js

import 'bootstrap';
```

Import Bootstrap Sass:

```scss
// app/styles/app.scss

@import 'node_modules/bootstrap/scss/bootstrap';
```


## Usage

```hbs
<Bs::Accordion />
<Bs::Alert />
<Bs::Breadcrumb />
<Bs::Button />
<Bs::ButtonGroup />
<Bs::Card />
<Bs::Dropdown />
<Bs::ListGroup />
<Bs::Modal />
<Bs::Nav />
<Bs::Navbar />
<Bs::Offcanvas />
<Bs::Pagination />
<Bs::Placeholder />
<Bs::Progress />
<Bs::Spinner />
<Bs::Toast />
<Bs::Toolbar />
```

```hbs
{{dropdown}}
{{tooltip}}
```


Examples
------------------------------------------------------------------------------

Accordion

```hbs
<Bs::Accordion @flush={{true}} @alwaysOpen={{true}} as |accordion|>
  <accordion.item as |item|>
    <item.button>My Title 1</item.button>
    <item.body>My Body 1</item.body>
  </accordion.item>
  <accordion.item as |item|>
    <item.button>My Title 2</item.button>
    <item.body>My Body 2</item.body>
  </accordion.item>
</Bs::Accordion>
```

Alerts

```hbs
<Bs::Alert @color="primary">
  A simple primary alert—check it out!
</Bs::Alert>
<Bs::Alert @color="primary">
  A simple primary alert with <LinkTo @route="example" class="alert-link">an example link</LinkTo>. Give it a click if you like.
</Bs::Alert>
<Bs::Alert @color="danger" @icon="exclamation-triangle">
  This alert includes an icon.
</Bs::Alert>
<Bs::Alert @color="success">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Bs::Alert>
```

Breadcrumb

```hbs
<Bs::Breadcrumb as |breadcrumb|>
  <breadcrumb.item @label="home">Home</breadcrumb.item>
  <breadcrumb.item @label="home.library">Library</breadcrumb.item>
  <breadcrumb.item @label="home.library.data">Data</breadcrumb.item>
</Bs::Breadcrumb>
```

Buttons

```hbs
<Bs::Button @onClick={{this.go}}>My Button</Bs::Button>
<Bs::Button @color="success" @onClick={{this.go}}>My Button</Bs::Button>
<Bs::Button @size="lg" @onClick={{this.go}}>My Button</Bs::Button>
<Bs::Button @size="sm" @disabled={{true}} @loading={{false}} @onClick={{this.go}}>My Button</Bs::Button>
```

Button group

```hbs
<Bs::ButtonGroup as |group|>
  <group.button @onClick={{this.go}}>Click Me 1</group.button>
  <group.button @onClick={{this.go}}>Click Me 2</group.button>
</Bs::ButtonGroup>
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
<Bs::Button {{dropdown autoClose="outside"}}>Open dropdown</Bs::Button>
<Bs::Dropdown @align="right" as |dropdown|>
  <dropdown.header>Dropdown header</dropdown.header>
  <dropdown.item @label="Action" />
  <dropdown.divider />
  <dropdown.item @label="Another action" @onClick={{fn (mut this.xyz)}} />
</Bs::Dropdown>
```

List group

```hbs
<Bs::ListGroup as |list|>
  <list.item>An item</list.item>
  <list.item>A second item</list.item>
  <list.item>A third item</list.item>
  <list.item>A fourth item</list.item>
  <list.item>And a fifth one</list.item>
</Bs::ListGroup>
<Bs::ListGroup as |list|>
  <list.item class="active">An active item</list.item>
  <list.item>A second item</list.item>
  <list.link-to @route="index">A link-to item</list.link-to>
</Bs::ListGroup>
<Bs::ListGroup as |list|>
  <list.item class="disabled">A disabled item</list.item>
  <list.item>A second item</list.item>
</Bs::ListGroup>
<Bs::ListGroup @flush={{true}} as |list|>
  <list.item>An item</list.item>
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

Navbar

```hbs
<Bs::Navbar class="navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li>
      </ul>
    </div>
  </div>
</Bs::Navbar>
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

Placeholders

```hbs
<Bs::Placeholder class="col-6" />
<Bs::Placeholder class="w-75" />
<Bs::Placeholder style={{html-safe "width: 25%;"}} />
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
<a href="#" {{tooltip "Tooltip on top"}}>
  Tooltip on top
</a>
<Bs::Button {{tooltip "Tooltip on top"}} @onClick={{this.go}}>
  Tooltip on top
</Bs::Button>
<Bs::Button {{tooltip "Tooltip on right" placement="right"}} @onClick={{this.go}}>
  Tooltip on right
</Bs::Button>
<Bs::Button {{tooltip "Tooltip with onHidden action" onHidden=this.doSomething}} @onClick={{this.go}}>
  Tooltip with onHidden action
</Bs::Button>
```


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
