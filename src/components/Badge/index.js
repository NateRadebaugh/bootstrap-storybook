import styled from "styled-components";

const Badge = styled.div.attrs({
  role: "badge",
  className: props => {
    let className = "badge";
    let type = "";
    if (props.primary) {
      type = "primary";
    } else if (props.secondary) {
      type = "secondary";
    } else if (props.success) {
      type = "success";
    } else if (props.danger) {
      type = "danger";
    } else if (props.warning) {
      type = "warning";
    } else if (props.info) {
      type = "info";
    } else if (props.light) {
      type = "light";
    } else if (props.dark) {
      type = "dark";
    }

    if (type) {
      className += ` badge-${type}`;
    }

    if (props.pill) {
      className += " badge-pill";
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

export const LinkBadge = Badge.withComponent("a");

export default Badge;
