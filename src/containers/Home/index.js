import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import DragonList from '../../components/DragonList';
import { Title, TitleContainer, ButtonNew } from './styles';
import { Actions as DragonActions } from '../../store/ducks/dragons';


const Home = ({
  getDragons,
  dragons: { list, loading },
}) => {
  const history = useHistory();
  useEffect(() => { getDragons(); }, []);
  const goToNew = () => history.push('/new');

  return (
    <>
      <Header />
      <TitleContainer>
        <Title> Lista de Dragões </Title>
        <ButtonNew onClick={goToNew}>  Novo </ButtonNew>
      </TitleContainer>
      <DragonList list={list} loading={loading} />
    </>
  );
};
Home.defaultProps = {
  dragons: {
    list: [],
    loading: false,
  },
};

Home.propTypes = {
  getDragons: PropTypes.func.isRequired,
  dragons: PropTypes.shape({
    list: PropTypes.array,
    loading: PropTypes.bool,
  }),
};

const mapStateToProps = ({ dragons }) => ({ dragons });
const mapDispatchToProps = (dispatch) => ({
  getDragons: () => dispatch(DragonActions.getDragons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
