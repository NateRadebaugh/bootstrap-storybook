import React from "react";
import styled from "styled-components";

const BreadcrumbNavWrapper = styled.nav.attrs({
  "aria-label": "breadcrumb"
})``;

const BreadcrumbListWrapper = styled.ol.attrs({
  className: props => {
    let className = "breadcrumb";

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  }
})``;

export const BreadcrumbWrapper = ({ children, ...rest }) => (
  <BreadcrumbNavWrapper {...rest}>
    <BreadcrumbListWrapper {...rest}>{children}</BreadcrumbListWrapper>
  </BreadcrumbNavWrapper>
);

const FlatBreadcrumb = styled.li.attrs({
  "aria-current": props => (props.active ? "page" : undefined),
  className: props => {
    let className = "breadcrumb-item";

    if (props.active) {
      className += " active";
    }

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  }
})``;

const LinkBreadcrumb = ({ active, ...rest }) => (
  <FlatBreadcrumb active={active}>
    <a {...rest} />
  </FlatBreadcrumb>
);

const Breadcrumb = props => {
  if (!props.active) {
    return <LinkBreadcrumb {...props} />;
  }

  return <FlatBreadcrumb {...props} />;
};

export default Breadcrumb;
