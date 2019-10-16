import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Actions } from '../../store/ducks/dragons';

import Header from '../../components/Header';
import DragonList from '../../components/DragonList';


 const Home = (props) => {
     useEffect(() => { props.getDragons()}, [])
     return (
            <>
              <Header/>
              <h1> Galeria de Dragões</h1>
              <DragonList list={props.dragons.list} />
            </>  
        )
    
}

const mapStateToProps = ({ dragons }) => ({ dragons });
export default connect(mapStateToProps, {...Actions})(Home)