import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions as DragonActions } from '../../store/ducks/dragons';
import { successNotification, errorNotification } from '../../helpers/notification';
import Form, {FormContainer} from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { PageTitle, BackLink } from './style';

import Header from '../Header';

const dragonNameInput = (value="", change) => ({
    label:'Nome do dragão',
    name:'dragon-name',
    autoComplete:'off',
    id:'dragon-name-input',
    type:'text',
    value,
    onChange: change
})
const dragonTypeInput = (value="", change) => ({
    label:'Tipo do dragão',
    name:'dragon-type',
    autoComplete:'off',
    id:'dragon-type-input',
    type:'text',
    value,
    onChange: change
})


const Dragon = (props) => {
    const history = useHistory();
    const [isEditionMode, setEditionMode] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const genericSetter = (setter) => {
        return (e) => {
            setter(e.target.value)
        }
    }
    useEffect(() => { 
        if(props.match.params 
            && props.match.params.id
            && !isEditionMode ) {
            props.getDragon(props.match.params.id)
            setEditionMode(true)
        }  
        if (isEditionMode) {
            setName(props.dragons.detail.name);
            setType(props.dragons.detail.type);
        }
    },[props.dragons.detail])

    useEffect(()=> {
        if(props.dragons.deleted) {
            successNotification(`Dragão ${name} removido!`);
            history.push('/');
        }
    }, [props.dragons.deleted])
    
    return (
          <>
            <Header/>
            <FormContainer>
                <Form onSubmit={(e)=> {e.preventDefault()}}>
                    <BackLink onClick={()=> { history.push('/')}}>&lt;- Voltar</BackLink>
                    <PageTitle>
                        { isEditionMode 
                        ? `Editando Dragão ID: ${props.dragons.detail.id}` 
                        : 'Criar novo Dragão' }
                    </PageTitle>
                    <Input {...dragonNameInput(name, genericSetter(setName))}/>
                    <Input {...dragonTypeInput(type, genericSetter(setType))}/>
                    <Button> { isEditionMode ? 'Editar' : 'Criar' } </Button>
                    {isEditionMode?  
                        <Button danger onClick={() => { 
                                props.deleteDragon(props.dragons.detail.id);}}>
                            Remover 
                        </Button> : ''}
                </Form>
            </FormContainer>
          </>  
      )
    
}

const mapStateToProps = ({ dragons }) => ({ dragons });
const mapDispatchToProps = (dispatch) => ({
  getDragon: (id) => dispatch(DragonActions.getDragon(id)),
  deleteDragon: (id) => dispatch(DragonActions.deleteDragon(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Dragon)