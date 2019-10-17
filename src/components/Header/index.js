import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import {
  HeaderStyle,
  HeaderAnchor,
  HeaderLogo,
  HeaderUserInfoContainer,
  HeaderLogout,
} from './styles';

const Header = ({
  username,
  logout,
}) => (
  <HeaderStyle>
    <HeaderAnchor href="/">
      <HeaderLogo src={`${logo}`} />
    </HeaderAnchor>
    <HeaderUserInfoContainer>
      <span>
          Olá
        {' '}
        { username }
      </span>
      <HeaderLogout onClick={logout}>Sair</HeaderLogout>
    </HeaderUserInfoContainer>
  </HeaderStyle>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
