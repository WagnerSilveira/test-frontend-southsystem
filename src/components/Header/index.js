import React from 'react';
import PropTypes from 'prop-types';

import { HeaderStyle } from './styles';

const Header = ({ children, ...props }) => (
  <HeaderStyle {...props}>
    {children}
  </HeaderStyle>
);

Header.defaultProps = {
    // type: 'submit',
};
Header.propTypes = {
//   type: PropTypes.string,
//   children: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.element
//     ]).isRequired,
};

export default Header;