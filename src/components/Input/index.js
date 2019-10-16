import React from 'react';
import PropTypes from 'prop-types';

import { InputStyle, Label, Container, Border } from './styles';

const Input = (props) => {

    return <Container htmlFor={`${props.id}`}> 
              <InputStyle  {...props} placeholder="&nbsp;"/>
              <Label>{props.label}</Label>
              <Border/>
            </Container>

}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default Input;