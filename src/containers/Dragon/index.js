import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions as DragonActions } from '../../store/ducks/dragons';
import Form, { FormContainer } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { PageTitle, BackLink } from './style';

import Header from '../Header';

const dragonNameInput = (value = '', change) => ({
  label: 'Nome do dragão',
  name: 'dragon-name',
  autoComplete: 'off',
  id: 'dragon-name-input',
  type: 'text',
  value,
  onChange: change,
});
const dragonTypeInput = (value = '', change) => ({
  label: 'Tipo do dragão',
  name: 'dragon-type',
  autoComplete: 'off',
  id: 'dragon-type-input',
  type: 'text',
  value,
  onChange: change,
});
const dragonCreationDateInput = (value = '') => ({
  label: 'Data de criação',
  name: 'dragon-created-at',
  autoComplete: 'off',
  id: 'dragon-createt-at-input',
  type: 'text',
  value: new Date(value).toLocaleString('pt-BR'),
  disabled: 'true',
});


const Dragon = ({
  match,
  dragons: {
    detail: dragon,
    isLoading,
  },
  getDragon,
  addDragon,
  updateDragon,
  deleteDragon,
}) => {
  const history = useHistory();
  const [isEditionMode, setEditionMode] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const genericSetter = (setter) => (e) => {
    setter(e.target.value);
  };
  const dragonId = match.params.id;
  useEffect(() => {
    if (match.params && dragonId && !isEditionMode) {
      getDragon(dragonId);
      setEditionMode(true);
    }
    if (isEditionMode) {
      setName(dragon.name);
      setType(dragon.type);
      setCreationDate(dragon.createdAt);
    }
  }, [dragon]);


  const saveDragon = () => {
    if (dragonId) {
      updateDragon(dragonId, name, type);
    } else {
      addDragon(name, type);
    }
  };
  return (
    <>
      <Header />
      <FormContainer>
        <Form onSubmit={(e) => { e.preventDefault(); }}>
          <BackLink onClick={() => { history.push('/'); }}>&lt;- Voltar</BackLink>
          <PageTitle>
            { isEditionMode
              ? `Editando Dragão ${dragon.name}`
              : 'Criar novo Dragão' }
          </PageTitle>
          <Input {...dragonNameInput(name, genericSetter(setName))} />
          <Input {...dragonTypeInput(type, genericSetter(setType))} />
          { isEditionMode ? <Input {...dragonCreationDateInput(creationDate)} /> : '' }
          <Button onClick={saveDragon} disabled={isLoading}>
            {' '}
            { isEditionMode ? 'Editar' : 'Criar' }
            {' '}
          </Button>
          {isEditionMode
            ? (
              <Button
                disabled={isLoading}
                danger
                onClick={() => {
                  deleteDragon(dragonId);
                }}
              >
                Remover
              </Button>
            ) : ''}
        </Form>
      </FormContainer>
    </>
  );
};

Dragon.defaultProps = {
  dragons: {
    detail: {},
    deleted: false,
    isLoading: false,
  },
};

Dragon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  dragons: PropTypes.shape({
    detail: PropTypes.object,
    deleted: PropTypes.bool,
    isLoading: PropTypes.bool,
    createdAt: PropTypes.string,
  }),
  getDragon: PropTypes.func.isRequired,
  addDragon: PropTypes.func.isRequired,
  updateDragon: PropTypes.func.isRequired,
  deleteDragon: PropTypes.func.isRequired,
};


const mapStateToProps = ({ dragons }) => ({ dragons });

const mapDispatchToProps = (dispatch) => ({
  getDragon: (id) => dispatch(DragonActions.getDragon(id)),
  deleteDragon: (id) => dispatch(DragonActions.deleteDragon(id)),
  addDragon: (name, type) => dispatch(DragonActions.addDragon(name, type)),
  updateDragon: (id, name, type) => dispatch(DragonActions.updateDragon(id, name, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);
