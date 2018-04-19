import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Breadcrumb, { BreadcrumbWrapper } from "../index";

storiesOf("Breadcrumb", module).add("Overview", () => (
  <div class="container-fluid p-3">
    <BreadcrumbWrapper>
      <Breadcrumb active>Home</Breadcrumb>
    </BreadcrumbWrapper>

    <BreadcrumbWrapper>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb active>Library</Breadcrumb>
    </BreadcrumbWrapper>

    <BreadcrumbWrapper>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Library</Breadcrumb>
      <Breadcrumb active>Data</Breadcrumb>
    </BreadcrumbWrapper>
  </div>
));
