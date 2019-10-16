import React from 'react';
import PropTypes from 'prop-types';

import { 
  Container, 
  ButtonStyle as ButtonDefault, 
  ButtonDanger
} from './styles';

const Button = ({ children, ...props }) => {
  let ButtonType = ButtonDefault;
  if(props.danger) {
    ButtonType = ButtonDanger;
  }
  return (
      <Container>
        <ButtonType {...props}>{children}</ButtonType>
      </Container>
    )
};

Button.defaultProps = {
    type: 'submit',
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
      PropTypes.any
    ]).isRequired,
};

export default Button;