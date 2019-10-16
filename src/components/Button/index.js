import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonStyle } from './styles';

const Button = ({ children, ...props }) => (
  <Container>
    <ButtonStyle {...props}>{children}</ButtonStyle>
  </Container>
);

Button.defaultProps = {
    type: 'submit',
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
};

export default Button;