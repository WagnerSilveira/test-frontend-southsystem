import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ButtonStyle as ButtonDefault,
  ButtonDanger,
} from './styles';

const Button = ({
  children,
  danger,
  onClick,
  type,
  disabled,
}) => {
  let ButtonType = ButtonDefault;

  if (danger) {
    ButtonType = ButtonDanger;
  }

  return (
    <Container>
      <ButtonType
        onClick={disabled ? () => {} : onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </ButtonType>
    </Container>
  );
};

Button.defaultProps = {
  type: 'submit',
  danger: false,
  disabled: false,
};
Button.propTypes = {
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
};

export default Button;
