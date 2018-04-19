import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Card, {
  CardImage,
  CardImageOverlay,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardFooter,
  CardGroup,
  CardDeck,
  CardColumns
} from "../index";

import Button, { LinkButton } from "../../Button";

export default storiesOf("Card", module)
  .add("Overview", () => (
    <div class="container-fluid p3">
      <div
        class="card"
        style={{
          width: `18rem`
        }}
      >
        <CardImage
          top
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{
            height: `180px`,
            width: `100%`,
            display: `block`
          }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5c7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5c7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18333435058594%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button primary>Go somewhere</Button>
        </CardBody>
      </div>
    </div>
  ))
  .add("Content - Body", () => (
    <div class="container-fluid p-3">
      <Card>
        <CardBody>This is some text within a card body.</CardBody>
      </Card>
    </div>
  ))
  .add("Content - Titles, text, and links", () => (
    <div class="container-fluid p-3">
      <Card style={{ width: `18rem` }}>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle muted class="mb-2">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">Card link</CardLink>
          <CardLink href="#">Another link</CardLink>
        </CardBody>
      </Card>
    </div>
  ))
  .add("Content - Images", () => (
    <div class="container-fluid p-3">
      <Card style={{ width: `18rem` }}>
        <CardImage
          top
          data-src="holder.js/100px180/?text=Image cap"
          alt="Image cap [100%x180]"
          style={{ height: `180px`, width: "100%", display: `block` }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5d0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5d0%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41666793823242%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  ))
  .add("Content - List groups", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <Card style={{ width: `18rem` }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card style={{ width: `18rem` }}>
            <CardHeader>Featured</CardHeader>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add("Content - Kitchen sink", () => (
    <div class="container-fluid p-3">
      <Card style={{ width: `18rem` }}>
        <CardImage
          top
          data-src="holder.js/100px180/?text=Image cap"
          alt="Image cap [100%x180]"
          style={{ height: `180px`, width: "100%", display: `block` }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5d6%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5d6%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.41666793823242%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <CardBody>
          <CardLink href="#">Card link</CardLink>
          <CardLink href="#">Another link</CardLink>
        </CardBody>
      </Card>
    </div>
  ))
  .add("Content - Header and footer", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <LinkButton href="#" primary>
                Go somewhere
              </LinkButton>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card>
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <LinkButton href="#" primary>
                Go somewhere
              </LinkButton>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card>
            <CardHeader>Quote</CardHeader>
            <CardBody>
              <blockquote class="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer class="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card class="text-center">
            <CardHeader>Featured</CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
            <CardFooter muted>2 days ago</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col-sm-6">
          <Card>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
        <div class="col-sm-6">
          <Card>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card class="w-75">
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Button
              </a>
            </CardBody>
          </Card>

          <Card class="w-50">
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Button
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card style={{ width: `18rem` }}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add("Text alignment", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <Card style={{ width: `18rem` }}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card class="text-center" style={{ width: `18rem` }}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card class="text-right" style={{ width: `18rem` }}>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add("Navigation", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <Card class="text-center">
            <CardHeader>
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <Card class="text-center">
            <CardHeader>
              <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </CardHeader>
            <CardBody>
              <CardTitle>Special title treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ))
  .add("Images", () => (
    <div class="container-fluid p-3">
      <Card class="mb-3">
        <CardImage
          top
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: `180px`, width: "100%", display: `block` }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5dc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5dc%22%3E%3Crect%20width%3D%221150%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22116.4%22%3E1150x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card class="mb-3">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImage
          bottom
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: `180px`, width: "100%", display: `block` }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5e2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5e2%22%3E%3Crect%20width%3D%221150%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22116.4%22%3E1150x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
      </Card>
      <Card class="bg-dark text-white">
        <CardImage
          data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
          alt="100%x270"
          style={{ height: `270px`, width: "100%", display: `block` }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221150%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201150%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5e7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5e7%22%3E%3Crect%20width%3D%221150%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22407.98333740234375%22%20y%3D%22161.4%22%3E1150x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardImageOverlay>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>Last updated 3 mins ago</CardText>
        </CardImageOverlay>
      </Card>
    </div>
  ))
  .add("Card Styles - Background and color", () => (
    <div class="container-fluid p-3">
      <Card primary class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card secondary class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Secondary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card success class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card danger class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Danger card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card warning class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Warning card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card info class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Info card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card light class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Light card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card dark class="mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Dark card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  ))
  .add("Card styles - Border", () => (
    <div class="container-fluid p-3">
      <Card class="border-primary mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-primary">
          <CardTitle>Primary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-secondary mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-secondary">
          <CardTitle>Secondary card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-success mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-success">
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-danger mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-danger">
          <CardTitle>Danger card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-warning mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-warning">
          <CardTitle>Warning card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-info mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-info">
          <CardTitle>Info card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-light mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Light card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
      <Card class="border-dark mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader>Header</CardHeader>
        <CardBody class="text-dark">
          <CardTitle>Dark card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  ))
  .add("Card styles - Mixins utilities", () => (
    <div class="container-fluid p-3">
      <Card class="border-success mb-3" style={{ maxWidth: `18rem` }}>
        <CardHeader class="bg-transparent border-success">Header</CardHeader>
        <CardBody class="text-success">
          <CardTitle>Success card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        <CardFooter class="bg-transparent border-success">Footer</CardFooter>
      </Card>
    </div>
  ))
  .add("Card layout - groups", () => (
    <div class="container-fluid p-3">
      <CardGroup>
        <Card>
          <img
            class="card-img-top"
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5f7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5f7%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe5fc%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe5fc%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22383%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20383%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe601%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe601%22%3E%3Crect%20width%3D%22383%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22142.91666793823242%22%20y%3D%2298.7%22%3E383x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </CardGroup>
    </div>
  ))
  .add("Card layout - decks", () => (
    <div class="container-fluid p-3">
      <CardDeck>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe617%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe617%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe61a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe61a%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: `180px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22362%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20362%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe61e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe61e%22%3E%3Crect%20width%3D%22362%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22134.95000076293945%22%20y%3D%2298.4%22%3E362x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
          <CardFooter>
            <small class="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </CardDeck>
    </div>
  ))
  .add("Card layout - columns", () => (
    <div class="container-fluid p-3">
      <CardColumns>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px160/"
            alt="100%x160"
            style={{ height: `160px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe623%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe623%22%3E%3Crect%20width%3D%22369%22%20height%3D%22160%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%2288.4%22%3E369x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title that wraps to a new line</CardTitle>
            <CardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card class="p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <CardImage
            top
            data-src="holder.js/100px160/"
            alt="100%x160"
            style={{ height: `160px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe628%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe628%22%3E%3Crect%20width%3D%22369%22%20height%3D%22160%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%2288.4%22%3E369x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              <small class="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card class="bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer class="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card class="text-center">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <CardText>
              <small class="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImage
            data-src="holder.js/100px260/"
            alt="100%x260"
            style={{ height: `260px`, width: "100%", display: `block` }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22369%22%20height%3D%22260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20369%20260%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1610fabe62e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1610fabe62e%22%3E%3Crect%20width%3D%22369%22%20height%3D%22260%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22138.45000076293945%22%20y%3D%22138.4%22%3E369x260%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
        </Card>
        <Card class="p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <CardText>
              <small class="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  ));
