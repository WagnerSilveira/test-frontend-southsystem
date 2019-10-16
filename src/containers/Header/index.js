import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions as UserActions } from '../../store/ducks/user';

import HeaderComponent from '../../components/Header';


 const Header = (props) => {
    const history = useHistory();
    const logout = () => {
      props.logout();
      history.push('/login')
    }
    return <HeaderComponent
                logout={logout} 
                username={props.user.name}>
            </HeaderComponent>   
}

const mapStateToProps = ({ user }) => ({  user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(UserActions.logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)