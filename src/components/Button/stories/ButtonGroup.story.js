import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, {
  LinkButton,
  InputButton,
  ButtonGroup,
  ButtonToolbar
} from "../index";

storiesOf("Button group", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <ButtonGroup label="Basic example">
        <Button onClick={action("clicked")} secondary>
          Left
        </Button>
        <Button onClick={action("clicked")} secondary>
          Middle
        </Button>
        <Button onClick={action("clicked")} secondary>
          Right
        </Button>
      </ButtonGroup>
    </div>
  ))
  .add("Button toolbar", () => (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col">
          <ButtonToolbar aria-label="Toolbar with Button groups">
            <ButtonGroup class="mr-2" label="First group">
              <Button onClick={action("clicked")} secondary>
                1
              </Button>
              <Button onClick={action("clicked")} secondary>
                2
              </Button>
              <Button onClick={action("clicked")} secondary>
                3
              </Button>
              <Button onClick={action("clicked")} secondary>
                4
              </Button>
            </ButtonGroup>
            <ButtonGroup class="mr-2" label="Second group">
              <Button onClick={action("clicked")} secondary>
                5
              </Button>
              <Button onClick={action("clicked")} secondary>
                6
              </Button>
              <Button onClick={action("clicked")} secondary>
                7
              </Button>
            </ButtonGroup>
            <ButtonGroup label="Third group">
              <Button onClick={action("clicked")} secondary>
                8
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ButtonToolbar class="mb-3" label="Toolbar with Button groups">
            <ButtonGroup class="mr-2" label="First group">
              <Button onClick={action("clicked")} secondary>
                1
              </Button>
              <Button onClick={action("clicked")} secondary>
                2
              </Button>
              <Button onClick={action("clicked")} secondary>
                3
              </Button>
              <Button onClick={action("clicked")} secondary>
                4
              </Button>
            </ButtonGroup>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text" id="btnGroupAddon">
                  @
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </ButtonToolbar>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ButtonToolbar
            class="justify-content-between"
            label="Toolbar with Button groups"
          >
            <ButtonGroup label="First group">
              <Button onClick={action("clicked")} secondary>
                1
              </Button>
              <Button onClick={action("clicked")} secondary>
                2
              </Button>
              <Button onClick={action("clicked")} secondary>
                3
              </Button>
              <Button onClick={action("clicked")} secondary>
                4
              </Button>
            </ButtonGroup>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text" id="btnGroupAddon2">
                  @
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
            </div>
          </ButtonToolbar>
        </div>
      </div>
    </div>
  ))
  .add("Sizing", () => (
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <ButtonGroup lg label="...">
            <Button onClick={action("clicked")} secondary>
              Left
            </Button>
            <Button onClick={action("clicked")} secondary>
              Middle
            </Button>
            <Button onClick={action("clicked")} secondary>
              Right
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ButtonGroup label="...">
            <Button onClick={action("clicked")} secondary>
              Left
            </Button>
            <Button onClick={action("clicked")} secondary>
              Middle
            </Button>
            <Button onClick={action("clicked")} secondary>
              Right
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <ButtonGroup sm label="...">
            <Button onClick={action("clicked")} secondary>
              Left
            </Button>
            <Button onClick={action("clicked")} secondary>
              Middle
            </Button>
            <Button onClick={action("clicked")} secondary>
              Right
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  ))
  .add("Nesting", () => (
    <div class="container-fluid p-3">
      <ButtonGroup label="Button group with nested dropdown">
        <Button onClick={action("clicked")} secondary>
          1
        </Button>
        <Button onClick={action("clicked")} secondary>
          2
        </Button>

        <ButtonGroup>
          <Button
            onClick={action("clicked")}
            id="btnGroupDrop1"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </Button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#">
              Dropdown link
            </a>
            <a class="dropdown-item" href="#">
              Dropdown link
            </a>
          </div>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  ))
  .add("Vertical variation", () => (
    <div class="container-fluid p-3">
      <ButtonGroup vertical label="Vertical Button group">
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
        <Button onClick={action("clicked")} secondary>
          Button
        </Button>
      </ButtonGroup>
    </div>
  ));
