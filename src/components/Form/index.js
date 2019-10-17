import React from 'react';
import PropTypes from 'prop-types';

import { FormStyle, Container } from './styles';

const Form = ({ children, ...props }) => (
  <FormStyle {...props}>
    {children}
  </FormStyle>
);
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export const FormContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);
FormContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Form;
