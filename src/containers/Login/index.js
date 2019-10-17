import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions } from '../../store/ducks/user';
import { Container, Logo } from './styles';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { isAuthenticated } from '../../helpers/authentication';

const Login = ({
  doLogin,
}) => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');


  const validateLogin = (e) => {
    e.preventDefault();
    doLogin(user, pass);
  };

  useEffect(() => {
    if (isAuthenticated()) {
      history.push('/');
    }
  });

  return (
    <>
      <Container>
        <Form onSubmit={validateLogin}>
          <Logo />
          <Input
            label="Usuário"
            name="user"
            autoComplete="off"
            id="user-input"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            label="Senha"
            autoComplete="off"
            name="pass"
            id="pass-input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button onClick={() => {}}> Entrar </Button>
        </Form>
      </Container>
    </>
  );
};
Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });
export default connect(
  mapStateToProps,
  { ...Actions },
)(Login);
