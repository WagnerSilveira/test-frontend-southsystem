import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions } from '../../store/ducks/user';
import { Container, Logo } from './styles';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { successNotification, errorNotification } from '../../helpers/notification';
import { isAuthenticated } from '../../helpers/authentication';

const Login = (props) => {
    const history = useHistory();
    const [ user, setUser ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ isLoginRequest, setLoginReq ] = useState(false);

    const validateLogin = (e) => {
        e.preventDefault();
        setLoginReq(true);
        props.doLogin(user, pass);
    }
    useEffect(() => { 
        if(isAuthenticated()){
            history.push('/')
            if(isLoginRequest) {
                successNotification("Usuário logado com sucesso")
                setLoginReq(false)
            }
        }
        if (isLoginRequest && props.user.error) {
            errorNotification("Usuário ou senha inválidos")
            setLoginReq(false)
        }
    })

    return (
        <React.Fragment>
            <Container>
                <Form onSubmit={validateLogin}>
                    <Logo/>
                    <Input label='Usuário'
                            name='user'
                            autoComplete='off'
                            id='user-input'
                            type='text'
                            value={user}
                            onChange={(e)=> setUser(e.target.value)}/>
                    <Input label='Senha'
                            autoComplete='off'  
                            name='pass'
                            id='pass-input' 
                            type='password'
                            value={pass}
                            onChange={(e)=> setPass(e.target.value)}/>
                    <Button> Entrar </Button>
                </Form>
            </Container>
        </React.Fragment>
    )
    
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, { ...Actions })(Login)