import React from 'react';
import PropTypes from 'prop-types';

import { FormStyle, Container } from './styles';

const Form = ({ children, ...props }) => (
  <FormStyle {...props}>
    {children}
  </FormStyle>
);
export const FormContainer =  ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
)

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,

};
export default Form;