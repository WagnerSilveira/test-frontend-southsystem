import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions as UserActions } from '../../store/ducks/user';

import HeaderComponent from '../../components/Header';


const Header = ({
  logout,
  user: {
    name,
  },
}) => {
  const history = useHistory();
  const doLogout = () => {
    logout();
    history.push('/login');
  };
  return (
    <HeaderComponent
      logout={doLogout}
      username={name}
    />
  );
};
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(UserActions.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
