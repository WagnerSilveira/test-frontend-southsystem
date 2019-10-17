import React from 'react';
import PropTypes from 'prop-types';

import {
  InputStyle, Label, Container, Border,
} from './styles';

const Input = (props) => {
  const { id, label } = props;
  return (
    <Container htmlFor={`${id}`}>
      <InputStyle {...props} placeholder="&nbsp;" />
      <Label>{label}</Label>
      <Border />
    </Container>
  );
};
Input.defaultProps = {
  type: 'text',
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
