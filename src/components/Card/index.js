import styled from "styled-components";

const Card = styled.div.attrs({
  className: props => {
    let className = "card";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardImage = styled.img.attrs({
  className: props => {
    let className = "card-img";

    if (props.top) {
      className += "-top";
    } else if (props.bottom) {
      className += "-bottom";
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

export const CardImageOverlay = styled.div.attrs({
  className: props => {
    let className = "card-img-overlay";
    let text = "";
    if (props.primary) {
      text = "primary";
    } else if (props.secondary) {
      text = "secondary";
    } else if (props.success) {
      text = "success";
    } else if (props.danger) {
      text = "danger";
    } else if (props.warning) {
      text = "warning";
    } else if (props.info) {
      text = "info";
    } else if (props.light) {
      text = "light";
    } else if (props.dark) {
      text = "dark";
    } else if (props.muted) {
      text = "muted";
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardBody = styled.div.attrs({
  className: props => {
    let className = "card-body";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardHeader = styled.div.attrs({
  className: props => {
    let className = "card-header";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardTitle = styled.h5.attrs({
  className: props => {
    let className = "card-title";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardSubtitle = styled.h6.attrs({
  className: props => {
    let className = "card-subtitle";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardFooter = styled.div.attrs({
  className: props => {
    let className = "card-footer";
    let background = "";
    let text = "";
    if (props.primary) {
      background = "primary";
      text = "white";
    } else if (props.secondary) {
      background = "secondary";
      text = "white";
    } else if (props.success) {
      background = "success";
      text = "white";
    } else if (props.danger) {
      background = "danger";
      text = "white";
    } else if (props.warning) {
      background = "warning";
      text = "white";
    } else if (props.info) {
      background = "info";
      text = "white";
    } else if (props.light) {
      background = "light";
      text = "dark";
    } else if (props.dark) {
      background = "dark";
      text = "white";
    } else if (props.muted) {
      text = "muted";
    }

    if (background) {
      className += ` bg-${background}`;
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardText = styled.p.attrs({
  className: props => {
    let className = "card-text";
    let text = "";
    if (props.primary) {
      text = "primary";
    } else if (props.secondary) {
      text = "secondary";
    } else if (props.success) {
      text = "success";
    } else if (props.danger) {
      text = "danger";
    } else if (props.warning) {
      text = "warning";
    } else if (props.info) {
      text = "info";
    } else if (props.light) {
      text = "light";
    } else if (props.dark) {
      text = "dark";
    } else if (props.muted) {
      text = "muted";
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardLink = styled.a.attrs({
  className: props => {
    let className = "card-link";
    let text = "";
    if (props.primary) {
      text = "primary";
    } else if (props.secondary) {
      text = "secondary";
    } else if (props.success) {
      text = "success";
    } else if (props.danger) {
      text = "danger";
    } else if (props.warning) {
      text = "warning";
    } else if (props.info) {
      text = "info";
    } else if (props.light) {
      text = "light";
    } else if (props.dark) {
      text = "dark";
    } else if (props.muted) {
      text = "muted";
    }

    if (text) {
      className += ` text-${text}`;
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

export const CardGroup = styled.div.attrs({
  className: props => {
    let className = "card-group";

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  }
})``;

export const CardDeck = styled.div.attrs({
  className: props => {
    let className = "card-deck";

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  }
})``;

export const CardColumns = styled.div.attrs({
  className: props => {
    let className = "card-columns";

    if (props.class) {
      className += ` ${props.class}`;
    }

    if (props.className) {
      className += ` ${props.className}`;
    }

    return className;
  }
})``;

export default Card;
