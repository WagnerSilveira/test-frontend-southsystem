import React from 'react';
import PropTypes from 'prop-types';

import { FormStyle } from './styles';

const Form = ({ children, ...props }) => (
  <FormStyle {...props}>
    {children}
  </FormStyle>
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element), 
        PropTypes.element
    ]).isRequired,

};
export default Form;