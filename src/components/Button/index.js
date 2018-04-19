import styled from "styled-components";

const Button = styled.button.attrs({
  "aria-pressed": props => (props.active ? "true" : undefined),
  "aria-disabled": props => (props.disabled ? "true" : undefined),
  disabled: props => (props.disabled ? true : undefined),
  role: "button",
  type: props =>
    props.type || props.submit ? "submit" : props.reset ? "reset" : "button",
  className: props => {
    let className = "btn";
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
    } else if (props.link) {
      type = "link";
    } else {
      type = "default";
    }

    className += " btn-";

    if (props.outline) {
      className += "outline-";
    }

    className += type;

    if (props.pill) {
      className += " btn-pill";
    }

    if (props.large || props.lg) {
      className += " btn-lg";
    }

    if (props.small || props.sm) {
      className += " btn-sm";
    }

    if (props.block) {
      className += " btn-block";
    }

    if (props.active) {
      className += " active";
    }

    if (props.disabled) {
      className += " disabled";
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

export const LinkButton = Button.withComponent("a");
export const InputButton = Button.withComponent("input");

export const ButtonGroup = styled.div.attrs({
  role: "group",
  className: props => {
    let className = "btn-group";

    if (props.vertical) {
      className += "-vertical";
    }

    if (props.large || props.lg) {
      className += " btn-group-lg";
    }

    if (props.small || props.sm) {
      className += " btn-group-sm";
    }

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  },
  "aria-label": props => (props.label ? props.label : undefined)
})``;

export const ButtonToolbar = styled.div.attrs({
  role: "toolbar",
  className: props => {
    let className = "btn-toolbar";

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  },
  "aria-label": props => (props.label ? props.label : undefined)
})``;

export default Button;
