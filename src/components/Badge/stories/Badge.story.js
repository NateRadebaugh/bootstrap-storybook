import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Badge, { LinkBadge } from "../index";

storiesOf("Badge", module)
  .add("Overview", () => (
    <div class="container-fluid mt-3">
      <h1>
        Example heading <Badge secondary>New</Badge>
      </h1>
      <h2>
        Example heading <Badge secondary>New</Badge>
      </h2>
      <h3>
        Example heading <Badge secondary>New</Badge>
      </h3>
      <h4>
        Example heading <Badge secondary>New</Badge>
      </h4>
      <h5>
        Example heading <Badge secondary>New</Badge>
      </h5>
      <h6>
        Example heading <Badge secondary>New</Badge>
      </h6>
    </div>
  ))
  .add("Notifications", () => (
    <div class="container-fluid mt-3">
      <div class="row ml-1">
        <button
          onClick={action("clicked")}
          type="button"
          class="btn btn-primary"
        >
          Notifications <Badge light>4</Badge>
        </button>
      </div>
      <div class="row mt-3 ml-1">
        <button
          onClick={action("clicked")}
          type="button"
          class="btn btn-primary"
        >
          Profile <Badge light>9</Badge>
          <span class="sr-only">unread messages</span>
        </button>
      </div>
    </div>
  ))
  .add("Contextual variations", () => (
    <div class="container-fluid mt-3">
      <Badge primary>Primary</Badge> <Badge secondary>Secondary</Badge>{" "}
      <Badge success>Success</Badge> <Badge danger>Danger</Badge>{" "}
      <Badge warning>Warning</Badge> <Badge info>Info</Badge>{" "}
      <Badge light>Light</Badge> <Badge dark>Dark</Badge>
    </div>
  ))
  .add("Pill badges", () => (
    <div class="container-fluid mt-3">
      <Badge pill primary>
        Primary
      </Badge>{" "}
      <Badge pill secondary>
        Secondary
      </Badge>{" "}
      <Badge pill success>
        Success
      </Badge>{" "}
      <Badge pill danger>
        Danger
      </Badge>{" "}
      <Badge pill warning>
        Warning
      </Badge>{" "}
      <Badge pill info>
        Info
      </Badge>{" "}
      <Badge pill light>
        Light
      </Badge>{" "}
      <Badge pill dark>
        Dark
      </Badge>
    </div>
  ))
  .add("Links", () => (
    <div class="container-fluid mt-3">
      <LinkBadge a href="#" primary>
        Primary
      </LinkBadge>{" "}
      <LinkBadge a href="#" secondary>
        Secondary
      </LinkBadge>{" "}
      <LinkBadge a href="#" success>
        Success
      </LinkBadge>{" "}
      <LinkBadge a href="#" danger>
        Danger
      </LinkBadge>{" "}
      <LinkBadge a href="#" warning>
        Warning
      </LinkBadge>{" "}
      <LinkBadge a href="#" info>
        Info
      </LinkBadge>{" "}
      <LinkBadge a href="#" light>
        Light
      </LinkBadge>{" "}
      <LinkBadge a href="#" dark>
        Dark
      </LinkBadge>
    </div>
  ));
