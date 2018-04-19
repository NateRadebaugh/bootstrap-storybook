import styled from "styled-components";

const Alert = styled.div.attrs({
  role: "alert",
  className: props => {
    let className = "alert";
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
      className += ` alert-${type}`;
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

export default Alert;
