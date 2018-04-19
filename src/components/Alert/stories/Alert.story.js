import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Alert from "../index";

export default storiesOf("Alert", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <Alert primary>This is a primary alert—check it out!</Alert>
      <Alert secondary>This is a secondary alert—check it out!</Alert>
      <Alert success>This is a success alert—check it out!</Alert>
      <Alert danger>This is a danger alert—check it out!</Alert>
      <Alert warning>This is a warning alert—check it out!</Alert>
      <Alert info>This is a info alert—check it out!</Alert>
      <Alert light>This is a light alert—check it out!</Alert>
      <Alert dark>This is a dark alert—check it out!</Alert>
    </div>
  ))
  .add("Link color", () => (
    <div class="container-fluid mt-3">
      <Alert primary>
        This is a primary alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert secondary>
        This is a secondary alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert success>
        This is a success alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert danger>
        This is a danger alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert warning>
        This is a warning alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert info>
        This is a info alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert light>
        This is a light alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
      <Alert dark>
        This is a dark alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>. Give it a click if you like.
      </Alert>
    </div>
  ))
  .add("Additional content", () => (
    <div class="container-fluid mt-3">
      <Alert success>
        <h4 class="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p class="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </div>
  ))
  .add("Dismissing", () => (
    <div class="container-fluid mt-3">
      <Alert warning>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          onClick={action("clicked")}
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </Alert>
    </div>
  ));
