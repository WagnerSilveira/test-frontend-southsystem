import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png'
import { 
  HeaderStyle,
  HeaderLogo,
  HeaderUserInfoContainer,
  HeaderLogout
} from './styles';

const Header = ({ children, ...props }) => (
  <HeaderStyle {...props}>
    <HeaderLogo src={`${logo}`}/>
    <HeaderUserInfoContainer>
        <span>Olá {props.username}</span>
        <HeaderLogout onClick={props.logout}>Sair</HeaderLogout>
    </HeaderUserInfoContainer>
    {children}
  </HeaderStyle>
);

Header.propTypes = {
   username: PropTypes.string.isRequired,
   logout: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
};

export default Header;