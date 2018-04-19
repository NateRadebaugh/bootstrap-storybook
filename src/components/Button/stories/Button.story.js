import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { LinkButton, InputButton } from "../index";

storiesOf("Button", module)
  .add("Overview", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <Button onClick={action("clicked")} primary>
            Primary
          </Button>{" "}
          <Button onClick={action("clicked")} secondary>
            Secondary
          </Button>{" "}
          <Button onClick={action("clicked")} success>
            Success
          </Button>{" "}
          <Button onClick={action("clicked")} danger>
            Danger
          </Button>{" "}
          <Button onClick={action("clicked")} warning>
            Warning
          </Button>{" "}
          <Button onClick={action("clicked")} info>
            Info
          </Button>{" "}
          <Button onClick={action("clicked")} light>
            Light
          </Button>{" "}
          <Button onClick={action("clicked")} dark>
            Dark
          </Button>{" "}
          <Button onClick={action("clicked")} link>
            Link
          </Button>
        </div>
      </div>
    </div>
  ))
  .add("Button tags", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <LinkButton primary href="#">
            Link
          </LinkButton>{" "}
          <Button onClick={action("clicked")} primary submit>
            Button
          </Button>{" "}
          <InputButton primary Button value="Input" />{" "}
          <InputButton primary submit value="Submit" />{" "}
          <InputButton primary reset value="Reset" />
        </div>
      </div>
    </div>
  ))
  .add("Outline buttons", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <Button onClick={action("clicked")} outline primary>
            Primary
          </Button>{" "}
          <Button onClick={action("clicked")} outline secondary>
            Secondary
          </Button>{" "}
          <Button onClick={action("clicked")} outline success>
            Success
          </Button>{" "}
          <Button onClick={action("clicked")} outline danger>
            Danger
          </Button>{" "}
          <Button onClick={action("clicked")} outline warning>
            Warning
          </Button>{" "}
          <Button onClick={action("clicked")} outline info>
            Info
          </Button>{" "}
          <Button onClick={action("clicked")} outline light>
            Light
          </Button>{" "}
          <Button onClick={action("clicked")} outline dark>
            Dark
          </Button>
        </div>
      </div>
    </div>
  ))
  .add("Sizes", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <Button onClick={action("clicked")} primary lg>
            Large Button
          </Button>{" "}
          <Button onClick={action("clicked")} secondary lg>
            Large Button
          </Button>
          <br />
          <br />
          <Button onClick={action("clicked")} primary sm>
            Small Button
          </Button>{" "}
          <Button onClick={action("clicked")} secondary sm>
            Small Button
          </Button>
          <br />
          <br />
          <Button onClick={action("clicked")} primary lg block>
            Block level Button
          </Button>
          <Button onClick={action("clicked")} secondary lg block>
            Block level Button
          </Button>
        </div>
      </div>
    </div>
  ))
  .add("Active state", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <LinkButton href="#" primary lg active>
            Primary link
          </LinkButton>{" "}
          <LinkButton href="#" secondary lg active>
            Link
          </LinkButton>
        </div>
      </div>
    </div>
  ))
  .add("Disabled state", () => (
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col">
          <Button onClick={action("clicked")} lg primary disabled>
            Primary Button
          </Button>{" "}
          <Button onClick={action("clicked")} secondary lg disabled>
            Button
          </Button>
          <br />
          <br />
          <LinkButton href="#" primary lg disabled>
            Primary link
          </LinkButton>{" "}
          <LinkButton href="#" secondary lg disabled>
            Link
          </LinkButton>
        </div>
      </div>
    </div>
  ));
