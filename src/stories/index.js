import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf("Alerts", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        This is a secondary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div class="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div class="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div class="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div class="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>
    </div>
  ))
  .add("Link color", () => (
    <div class="container-fluid mt-3">
      <div class="alert alert-primary" role="alert">
        This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-secondary" role="alert">
        This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-success" role="alert">
        This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-danger" role="alert">
        This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-warning" role="alert">
        This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-info" role="alert">
        This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-light" role="alert">
        This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <div class="alert alert-dark" role="alert">
        This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
    </div>
  ))
  .add("Additional content", () => (
    <div class="container-fluid mt-3">
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
    </div>
  ))
  .add("Dismissing", () => (
    <div class="container-fluid mt-3">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button onClick={action('clicked')} type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  ));

storiesOf("Badge", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <h1>Example heading <span class="badge badge-secondary">New</span></h1>
      <h2>Example heading <span class="badge badge-secondary">New</span></h2>
      <h3>Example heading <span class="badge badge-secondary">New</span></h3>
      <h4>Example heading <span class="badge badge-secondary">New</span></h4>
      <h5>Example heading <span class="badge badge-secondary">New</span></h5>
      <h6>Example heading <span class="badge badge-secondary">New</span></h6>
    </div>
  ))
  .add("Notifications", () => (
    <div class="container-fluid mt-3">
      <div class="row ml-1">
        <button onClick={action('clicked')} type="button" class="btn btn-primary">
          Notifications <span class="badge badge-light">4</span>
        </button>
      </div>
      <div class="row mt-3 ml-1">
        <button onClick={action('clicked')} type="button" class="btn btn-primary">
          Profile <span class="badge badge-light">9</span>
          <span class="sr-only">unread messages</span>
        </button>
      </div>
    </div>
  ))
  .add("Contextual variations", () => (
    <div class="container-fluid mt-3">
      <span class="badge badge-primary">Primary</span>{' '}
      <span class="badge badge-secondary">Secondary</span>{' '}
      <span class="badge badge-success">Success</span>{' '}
      <span class="badge badge-danger">Danger</span>{' '}
      <span class="badge badge-warning">Warning</span>{' '}
      <span class="badge badge-info">Info</span>{' '}
      <span class="badge badge-light">Light</span>{' '}
      <span class="badge badge-dark">Dark</span>
    </div>
  ))
  .add("Pill badges", () => (
    <div class="container-fluid mt-3">
      <span class="badge badge-pill badge-primary">Primary</span>{' '}
      <span class="badge badge-pill badge-secondary">Secondary</span>{' '}
      <span class="badge badge-pill badge-success">Success</span>{' '}
      <span class="badge badge-pill badge-danger">Danger</span>{' '}
      <span class="badge badge-pill badge-warning">Warning</span>{' '}
      <span class="badge badge-pill badge-info">Info</span>{' '}
      <span class="badge badge-pill badge-light">Light</span>{' '}
      <span class="badge badge-pill badge-dark">Dark</span>
    </div>
  ))
  .add("Links", () => (
    <div class="container-fluid mt-3">
      <a href="#" class="badge badge-primary">Primary</a>{' '}
      <a href="#" class="badge badge-secondary">Secondary</a>{' '}
      <a href="#" class="badge badge-success">Success</a>{' '}
      <a href="#" class="badge badge-danger">Danger</a>{' '}
      <a href="#" class="badge badge-warning">Warning</a>{' '}
      <a href="#" class="badge badge-info">Info</a>{' '}
      <a href="#" class="badge badge-light">Light</a>{' '}
      <a href="#" class="badge badge-dark">Dark</a>
    </div>
  ));

storiesOf("Breadcrumb", module)
  .add("Overview", () => (
    <div class="container-fluid p-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
  ));

storiesOf("Buttons", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <button onClick={action('clicked')} type="button" class="btn btn-primary">Primary</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-secondary">Secondary</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-success">Success</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-danger">Danger</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-warning">Warning</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-info">Info</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-light">Light</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-dark">Dark</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-link">Link</button>
    </div>
  ))
  .add("Button tags", () => (
    <div class="container-fluid mt-3">
      <a class="btn btn-primary" href="#" role="button">Link</a>{' '}
      <button onClick={action('clicked')} class="btn btn-primary" type="submit">Button</button>{' '}
      <input class="btn btn-primary" type="button" value="Input" />{' '}
      <input class="btn btn-primary" type="submit" value="Submit" />{' '}
      <input class="btn btn-primary" type="reset" value="Reset" />
    </div>
  ))
  .add("Outline buttons", () => (
    <div class="container-fluid mt-3">
      <button onClick={action('clicked')} type="button" class="btn btn-outline-primary">Primary</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-secondary">Secondary</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-success">Success</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-danger">Danger</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-warning">Warning</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-info">Info</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-light">Light</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-outline-dark">Dark</button>
    </div>
  ))
  .add("Sizes", () => (
    <div class="container-fluid mt-3">
      <button onClick={action('clicked')} type="button" class="btn btn-primary btn-lg">Large button</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-secondary btn-lg">Large button</button>
      <br /><br />
      <button onClick={action('clicked')} type="button" class="btn btn-primary btn-sm">Small button</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-secondary btn-sm">Small button</button>
      <br /><br />
      <button onClick={action('clicked')} type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
      <button onClick={action('clicked')} type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
    </div>
  ))
  .add("Active state", () => (
    <div class="container-fluid mt-3">
      <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>{' '}
      <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
    </div>
  ))
  .add("Disabled state", () => (
    <div class="container-fluid mt-3">
      <button onClick={action('clicked')} type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>{' '}
      <button onClick={action('clicked')} type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
      <br /><br />
      <a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>{' '}
      <a href="#" class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
    </div>
  ));

storiesOf("Button group", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Left</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Middle</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Right</button>
      </div>
    </div>
  ))
  .add("Button toolbar", () => (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col">
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">1</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">2</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">3</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">5</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">6</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">7</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">8</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">1</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">2</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">3</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text" id="btnGroupAddon">@</div>
              </div>
              <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="First group">
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">1</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">2</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">3</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text" id="btnGroupAddon2">@</div>
              </div>
              <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <div class="btn-group btn-group-lg" role="group" aria-label="...">
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Left</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Middle</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Right</button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="btn-group" role="group" aria-label="...">
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Left</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Middle</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Right</button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="btn-group btn-group-sm" role="group" aria-label="...">
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Left</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Middle</button>
            <button onClick={action('clicked')} type="button" class="btn btn-secondary">Right</button>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Nesting", () => (
    <div class="container-fluid p-3">
      <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">1</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">2</button>

        <div class="btn-group" role="group">
          <button onClick={action('clicked')} id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#">Dropdown link</a>
            <a class="dropdown-item" href="#">Dropdown link</a>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Vertical variation", () => (
    <div class="container-fluid p-3">
      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
        <button onClick={action('clicked')} type="button" class="btn btn-secondary">Button</button>
      </div>
    </div>
  ));

storiesOf("Card", module)
  .add("Overview", () => (
    <div class="container-fluid p3">
      <div
        class="card"
        style={{
          width: `18rem`
        }}
      >
        <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180"
          style={{
            height: `180px`,
            width: `100%`,
            display: `block`
          }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5c7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5c7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18333435058594%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  ))
  .add("Content - Body", () => (
    <div class="container-fluid p-3">
      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
    </div>
  ))
  .add("Content - Titles, text, and links", () => (
    <div class="container-fluid p-3">
      <div class="card" style={{width: `18rem`}}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  ))
  .add("Content - Images", () => (
    <div class="container-fluid p-3">
      <div class="card" style={{width: `18rem`}}>
        <img class="card-img-top" data-src="holder.js/100px180/?text=Image cap" alt="Image cap [100%x180]" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5d0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5d0%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41666793823242%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  ))
  .add("Content - List groups", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <div class="card" style={{width: `18rem`}}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card" style={{width: `18rem`}}>
            <div class="card-header">
              Featured
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Content - Kitchen sink", () => (
    <div class="container-fluid p-3">
      <div class="card" style={{width: `18rem`}}>
        <img class="card-img-top" data-src="holder.js/100px180/?text=Image cap" alt="Image cap [100%x180]" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5d6%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5d6%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41666793823242%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  ))
  .add("Content - Header and footer", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card w-75">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div>

          <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card" style={{width: `18rem`}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Text alignment", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <div class="card" style={{width: `18rem`}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card text-center" style={{width: `18rem`}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card text-right" style={{width: `18rem`}}>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Navigation", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Images", () => (
    <div class="container-fluid p-3">
      <div class="card mb-3">
        <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5dc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5dc%22%3E%3Crect%20width%3D%221150%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22116.4%22%3E1150x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img class="card-img-bottom" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5e2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5e2%22%3E%3Crect%20width%3D%221150%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22116.4%22%3E1150x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
      </div>
      <div class="card bg-dark text-white">
        <img class="card-img" data-src="holder.js/100px270/#55595c:#373a3c/text:Card image" alt="100%x270" style={{height: `270px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5e7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5e7%22%3E%3Crect%20width%3D%221150%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22161.4%22%3E1150x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  ))
  .add("Card Styles - Background and color", () => (
    <div class="container-fluid p-3">
      <div class="card text-white bg-primary mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-secondary mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-success mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-danger mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-warning mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Warning card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-info mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card bg-light mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-dark mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  ))
  .add("Card styles - Border", () => (
    <div class="container-fluid p-3">
      <div class="card border-primary mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-secondary mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-success mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-danger mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-danger">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-warning mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-warning">
          <h5 class="card-title">Warning card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-info mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-info">
          <h5 class="card-title">Info card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-light mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card border-dark mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header">Header</div>
        <div class="card-body text-dark">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  ))
  .add("Card styles - Mixins utilities", () => (
    <div class="container-fluid p-3">
      <div class="card border-success mb-3" style={{maxWidth: `18rem`}}>
        <div class="card-header bg-transparent border-success">Header</div>
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer bg-transparent border-success">Footer</div>
      </div>
    </div>
  ))
  .add("Card layout - groups", () => (
    <div class="container-fluid p-3">
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5f7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5f7%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5fc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5fc%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe601%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe601%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Card layout - decks", () => (
    <div class="container-fluid p-3">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe617%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe617%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe61a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe61a%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: `180px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe61e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe61e%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Card layout - columns", () => (
    <div class="container-fluid p-3">
      <div class="card-columns">
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px160/" alt="100%x160" style={{height: `160px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe623%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe623%22%3E%3Crect%20width%3D%22369%22%20height%3D%22160%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%2288.4%22%3E369x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="card p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100px160/" alt="100%x160" style={{height: `160px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe628%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe628%22%3E%3Crect%20width%3D%22369%22%20height%3D%22160%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%2288.4%22%3E369x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img" data-src="holder.js/100px260/" alt="100%x260" style={{height: `260px`, width: '100%', display: `block`}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20260%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe62e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe62e%22%3E%3Crect%20width%3D%22369%22%20height%3D%22260%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%22138.4%22%3E369x260%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
        </div>
        <div class="card p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf("Carousel", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      N/A
    </div>
  ));

storiesOf("Collapse", module)
  .add("Accordian example", () => (
    <div class="container-fluid mt-3">
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button onClick={action('clicked')} class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button onClick={action('clicked')} class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button onClick={action('clicked')} class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf("Dropdowns", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      N/A
    </div>
  ));

storiesOf("Forms", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button onClick={action('clicked')} type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  ))
  .add("Form controls", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <form>
        <div class="form-group">
          <label for="exampleFormControlFile1">Example file input</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
        </div>
      </form>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid mt-3">
      <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
      <input class="form-control" type="text" placeholder="Default input" />
      <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
      <select class="form-control form-control-lg">
        <option>Large select</option>
      </select>
      <select class="form-control">
        <option>Default select</option>
      </select>
      <select class="form-control form-control-sm">
        <option>Small select</option>
      </select>
    </div>
  ))
  .add("Readonly", () => (
    <div class="container-fluid mt-3">
      <input class="form-control" type="text" placeholder="Readonly input here…" readonly />
    </div>
  ))
  .add("Readonly plain text", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
      </form>
      <form class="form-inline">
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
        </div>
        <button onClick={action('clicked')} type="submit" class="btn btn-primary mb-2">Confirm identity</button>
      </form>
    </div>
  ))
  .add("Checkboxes and radios", () => (
    <div class="container-fluid mt-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
        <label class="form-check-label" for="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
        <label class="form-check-label" for="exampleRadios1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
        <label class="form-check-label" for="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
        <label class="form-check-label" for="exampleRadios3">
          Disabled radio
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        <label class="form-check-label" for="inlineCheckbox1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
        <label class="form-check-label" for="inlineCheckbox2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
      </div>
      <div class="form-check">
        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
      </div>
      <div class="form-check">
        <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..." />
      </div>
    </div>
  ))
  .add("Layout - groups", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
        </div>
      </form>
    </div>
  ))
  .add("Layout - grid", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
      </form>
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
      </form>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button onClick={action('clicked')} type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                <label class="form-check-label" for="gridRadios3">
                  Third disabled radio
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button onClick={action('clicked')} type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
      <form>
        <div class="form-group row">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label" />
          </div>
        </div>
        <div class="form-group row">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
          </div>
        </div>
      </form>
      <form>
        <div class="form-row">
          <div class="col-7">
            <input type="text" class="form-control" placeholder="City" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="State" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Zip" />
          </div>
        </div>
      </form>
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">Name</label>
            <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
          </div>
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
            </div>
          </div>
          <div class="col-auto">
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
              <label class="form-check-label" for="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button onClick={action('clicked')} type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>
      <form>
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label class="sr-only" for="inlineFormInputName">Name</label>
            <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
          </div>
          <div class="col-sm-3 my-1">
            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
            </div>
          </div>
          <div class="col-auto my-1">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
              <label class="form-check-label" for="autoSizingCheck2">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto my-1">
            <button onClick={action('clicked')} type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <div class="custom-control custom-checkbox mr-sm-2">
              <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
              <label class="custom-control-label" for="customControlAutosizing">Remember my preference</label>
            </div>
          </div>
          <div class="col-auto my-1">
            <button onClick={action('clicked')} type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  ))
  .add("Layout - inline", () => (
    <div class="container-fluid mt-3">
      <form class="form-inline">
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
        </div>
        <div class="form-check mb-2 mr-sm-2">
          <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
          <label class="form-check-label" for="inlineFormCheck">
            Remember me
          </label>
        </div>
        <button onClick={action('clicked')} type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>

      <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
          <input type="checkbox" class="custom-control-input" id="customControlInline" />
          <label class="custom-control-label" for="customControlInline">Remember my preference</label>
        </div>
        <button onClick={action('clicked')} type="submit" class="btn btn-primary my-1">Submit</button>
      </form>
    </div>
  ))
  .add("Help text", () => (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col">
          <label for="inputPassword5">Password</label>
          <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
          <small id="passwordHelpBlock" class="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPassword6">Password</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
              <small id="passwordHelpInline" class="text-muted">
                Must be 8-20 characters long.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  ))
  .add("Disabled", () => (
    <div class="container-fluid mt-3">
      <form>
        <fieldset disabled>
          <div class="form-group">
            <label for="disabledTextInput">Disabled input</label>
            <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
          </div>
          <div class="form-group">
            <label for="disabledSelect">Disabled select menu</label>
            <select id="disabledSelect" class="form-control">
              <option>Disabled select</option>
            </select>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
            <label class="form-check-label" for="disabledFieldsetCheck">
              Can't check this
            </label>
          </div>
          <button onClick={action('clicked')} type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </div>
  ))
  .add("Validations", () => (
    <div class="container-fluid mt-3">
      <form>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationServer01">First name</label>
            <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServer02">Last name</label>
            <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationServerUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationServer03">City</label>
            <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer04">State</label>
            <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required />
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationServer05">Zip</label>
            <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
            <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button onClick={action('clicked')} class="btn btn-primary" type="submit">Submit form</button>
      </form>

      <form class="was-validated">
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
          <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
          <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div class="custom-control custom-radio mb-3">
          <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
          <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
          <div class="invalid-feedback">More example invalid feedback text</div>
        </div>

        <div class="form-group">
          <select class="custom-select" required>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>

        <div class="custom-file">
          <input type="file" class="custom-file-input" id="validatedCustomFile" required />
          <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
        </div>
      </form>
    </div>
  ));

storiesOf("Input group", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>
      </div>

      <label for="basic-url">Your vanity URL</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">With textarea</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid mt-3">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
        </div>
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        </div>
        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
        </div>
        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </div>
    </div>
  ))
  .add("Checkboxes and radios", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" />
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with checkbox" />
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="radio" aria-label="Radio button for following text input" />
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with radio button" />
      </div>
    </div>
  ))
  .add("Multiple Inputs", () => (
    <div class="container-fluid mt-3">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">First and last name</span>
        </div>
        <input type="text" class="form-control" />
        <input type="text" class="form-control" />
      </div>
    </div>
  ))
  .add("Multiple addons", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
      </div>

      <div class="input-group">
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
        <div class="input-group-append">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
        </div>
      </div>
    </div>
  ))
  .add("Button addons", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </div>
  ))
  .add("Buttons with dropdowns", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
      </div>

      <div class="input-group">
        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
        <div class="input-group-append">
          <button onClick={action('clicked')} class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Segmented buttons", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} type="button" class="btn btn-outline-secondary">Action</button>
          <button onClick={action('clicked')} type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
      </div>

      <div class="input-group">
        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
        <div class="input-group-append">
          <button onClick={action('clicked')} type="button" class="btn btn-outline-secondary">Action</button>
          <button onClick={action('clicked')} type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Custom select", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Options</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <select class="custom-select" id="inputGroupSelect02">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="input-group-append">
          <label class="input-group-text" for="inputGroupSelect02">Options</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <select class="custom-select" id="inputGroupSelect03">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="input-group">
        <select class="custom-select" id="inputGroupSelect04">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="input-group-append">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </div>
  ))
  .add("Custome file input", () => (
    <div class="container-fluid mt-3">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" />
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02" />
          <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="">Upload</span>
        </div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile03" />
          <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
        </div>
      </div>

      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04" />
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button onClick={action('clicked')} class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </div>
  ));

storiesOf("Jumbotron", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </div>
  ));

storiesOf("List group", module)
  .add("Basic example", () => (
    <div class="container-fluid mt-3">
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ))
  .add("Active items", () => (
    <div class="container-fluid mt-3">
      <ul class="list-group">
        <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ))
  .add("Disabled items", () => (
    <div class="container-fluid mt-3">
      <ul class="list-group">
        <li class="list-group-item disabled">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ))
  .add("Links and buttons", () => (
    <div class="container-fluid mt-3">
      <div class="list-group mb-3">
        <a href="#" class="list-group-item list-group-item-action active">
          Cras justo odio
        </a>
        <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
        <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
        <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
        <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
      </div>
      <div class="list-group">
        <button onClick={action('clicked')} type="button" class="list-group-item list-group-item-action active">
          Cras justo odio
        </button>
        <button onClick={action('clicked')} type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
        <button onClick={action('clicked')} type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
        <button onClick={action('clicked')} type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
        <button onClick={action('clicked')} type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
      </div>
    </div>
  ))
  .add("Flush", () => (
    <div class="container-fluid mt-3">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ))
  .add("Contextual classes", () => (
    <div class="container-fluid mt-3">
      <div class="row mb-3">
        <div class="col">
          <ul class="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
            <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
            <li class="list-group-item list-group-item-success">This is a success list group item</li>
            <li class="list-group-item list-group-item-danger">This is a danger list group item</li>
            <li class="list-group-item list-group-item-warning">This is a warning list group item</li>
            <li class="list-group-item list-group-item-info">This is a info list group item</li>
            <li class="list-group-item list-group-item-light">This is a light list group item</li>
            <li class="list-group-item list-group-item-dark">This is a dark list group item</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">This is a primary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">This is a secondary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-success">This is a success list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">This is a danger list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-warning">This is a warning list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-info">This is a info list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light">This is a light list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">This is a dark list group item</a>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("With badges", () => (
    <div class="container-fluid mt-3">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-primary badge-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span class="badge badge-primary badge-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span class="badge badge-primary badge-pill">1</span>
        </li>
      </ul>
    </div>
  ))
  .add("Custom content", () => (
    <div class="container-fluid mt-3">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
      </div>
    </div>
  ));

storiesOf("Modal", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div
        class="modal mb-3"
        tabindex="-1"
        role="dialog"
        style={{
          position: 'relative',
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto',
          'z-index': 1,
          display: 'block'
        }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button onClick={action('clicked')} type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button onClick={action('clicked')} type="button" class="btn btn-primary">Save changes</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal mb-3"
        tabindex="-1"
        role="dialog"
        style={{
          position: 'relative',
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto',
          'z-index': 1,
          display: 'block'
        }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button onClick={action('clicked')} type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4">.col-md-4</div>
                  <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                </div>
                <div class="row">
                  <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                  <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                </div>
                <div class="row">
                  <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                </div>
                <div class="row">
                  <div class="col-sm-9">
                    Level 1: .col-sm-9
                    <div class="row">
                      <div class="col-8 col-sm-6">
                        Level 2: .col-8 .col-sm-6
                      </div>
                      <div class="col-4 col-sm-6">
                        Level 2: .col-4 .col-sm-6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button onClick={action('clicked')} type="button" class="btn btn-primary">Save changes</button>
              <button onClick={action('clicked')} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

storiesOf("Navs", module)
  .add("Base nav", () => (
    <div class="container-fluid mt-3">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <nav class="nav">
        <a class="nav-link active" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#">Disabled</a>
      </nav>
    </div>
  ))
  .add("Horizontal alignment", () => (
    <div class="container-fluid mt-3">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))
  .add("Vertical", () => (
    <div class="container-fluid mt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <nav class="nav flex-column">
        <a class="nav-link active" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#">Disabled</a>
      </nav>
    </div>
  ))
  .add("Tabs", () => (
    <div class="container-fluid mt-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))
  .add("Pills", () => (
    <div class="container-fluid mt-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))
  .add("Fill and justify", () => (
    <div class="container-fluid mt-3">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Longer nav link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <nav class="nav nav-pills nav-fill">
        <a class="nav-item nav-link active" href="#">Active</a>
        <a class="nav-item nav-link" href="#">Link</a>
        <a class="nav-item nav-link" href="#">Link</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
      </nav>
      <nav class="nav nav-pills nav-justified">
        <a class="nav-link active" href="#">Active</a>
        <a class="nav-link" href="#">Longer nav link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#">Disabled</a>
      </nav>
      <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link active" href="#">Active</a>
        <a class="nav-item nav-link" href="#">Link</a>
        <a class="nav-item nav-link" href="#">Link</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
      </nav>
    </div>
  ))
  .add("Working with flex utilities", () => (
    <div class="container-fluid mt-3">
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
      </nav>
    </div>
  ))
  .add("Tabs with dropdowns", () => (
    <div class="container-fluid mt-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))
  .add("Pills with dropdowns", () => (
    <div class="container-fluid mt-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ));
storiesOf("Navbar", module)
  .add("Supported content", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={action('clicked')} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  ))
  .add("Supported content - Brand", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>

      <nav class="navbar navbar-light bg-light mb-3">
        <span class="navbar-brand mb-0 h1">Navbar</span>
      </nav>

      <nav class="navbar navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">
          <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        </a>
      </nav>

      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
          Bootstrap
        </a>
      </nav>
    </div>
  ))
  .add("Supported content - Nav", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  ))
  .add("Supported content - Forms", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-light bg-light mb-3">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={action('clicked')} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>

      <nav class="navbar navbar-light bg-light justify-content-between mb-3">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={action('clicked')} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>

      <nav class="navbar navbar-light bg-light mb-3">
        <form class="form-inline">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </form>
      </nav>

      <nav class="navbar navbar-light bg-light mb-3">
        <form class="form-inline">
          <button onClick={action('clicked')} class="btn btn-outline-success" type="button">Main button</button>
          <button onClick={action('clicked')} class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
      </nav>
    </div>
  ))
  .add("Supported content - Text", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-light bg-light mb-3">
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
    </div>
  ))
  .add("Color schemes", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="search" />
            <button onClick={action('clicked')} class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="search" />
            <button onClick={action('clicked')} class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light mb-3" style={{backgroundColor: '#e3f2fd'}}>
        <a class="navbar-brand" href="#">Navbar</a>
        <button onClick={action('clicked')} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="search" />
            <button onClick={action('clicked')} class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  ))
  .add("Containers", () => (
    <div class="mt-3">
      <div class="container mb-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
        </nav>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
    </div>
  ))
  .add("Placement", () => (
    <div class="container-fluid mt-3">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Default</a>
      </nav>

      <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Fixed top</a>
      </nav>

      <nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand" href="#">Fixed bottom</a>
      </nav>

      <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Sticky top</a>
      </nav>
    </div>
  ));

storiesOf("Pagination", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  ))
  .add("Working with icons", () => (
    <div class="container-fluid mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ))
  .add("Disabled and active states", () => (
    <div class="container-fluid mt-3">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <nav aria-label="..." class="mt-3">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <span class="page-link">
              2
              <span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid mt-3">
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>

      <nav aria-label="..." class="mt-3">
        <ul class="pagination pagination-sm">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  ))
  .add("Alignment", () => (
    <div class="container-fluid mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <nav aria-label="Page navigation example" class="mt-3">
        <ul class="pagination justify-content-end">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  ));

storiesOf("Popovers", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="popover show bs-popover-right mb-3 ml-3" style={{position: 'relative'}}>
        <div class="arrow" style={{top: '34px'}}></div>
        <h3 class="popover-header">
          Popover title
        </h3>
        <div class="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>

      <div class="popover show bs-popover-left mb-3 ml-3" style={{position: 'relative'}}>
        <div class="arrow" style={{top: '34px'}}></div>
        <h3 class="popover-header">
          Popover title
        </h3>
        <div class="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>

      <div class="popover show bs-popover-top mb-3 ml-3" style={{position: 'relative'}}>
        <div class="arrow" style={{left: '129px', bottom: '-8px'}}></div>
        <h3 class="popover-header">
          Popover title
        </h3>
        <div class="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>

      <div class="popover show bs-popover-bottom m-3" style={{position: 'relative'}}>
        <div class="arrow" style={{left: '129px'}}></div>
        <h3 class="popover-header">
          Popover title
        </h3>
        <div class="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>
    </div>
  ));

storiesOf("Progress", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div class="progress">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ))
  .add("Labels", () => (
    <div class="container-fluid mt-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
    </div>
  ))
  .add("Height", () => (
    <div class="container-fluid mt-3">
      <div class="progress mb-3" style={{height: '1px'}}>
        <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3" style={{height: '20px'}}>
        <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ))
  .add("Backgrounds", () => (
    <div class="container-fluid mt-3">
      <div class="progress mb-3">
        <div class="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ))
  .add("Multiple bars", () => (
    <div class="container-fluid mt-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ))
  .add("Striped", () => (
    <div class="container-fluid mt-3">
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ))
  .add("Animated stripes", () => (
    <div class="container-fluid mt-3">
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  ));

storiesOf("Tooltips", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <div class="tooltip show bs-tooltip-top" style={{position: 'relative'}}>
        <div class="arrow" style={{left: '24px'}}></div>
        <div class="tooltip-inner">
          Some tooltip text!
        </div>
      </div>

      <div class="tooltip show bs-tooltip-left mt-3" style={{position: 'relative'}}>
        <div class="arrow" style={{top: '8px', left: '206px'}}></div>
        <div class="tooltip-inner">
          <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </div>
      </div>
    </div>
  ));