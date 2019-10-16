import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { Actions as DragonActions } from '../../store/ducks/dragons';
import Header from '../Header';
import DragonList from '../../components/DragonList';


 const Home = (props) => {

    useEffect(() => { props.getDragons()}, [])
    
    return (
          <>
            <Header/>
            <DragonList list={props.dragons.list} />
          </>  
      )
    
}

const mapStateToProps = ({ dragons }) => ({ dragons });
const mapDispatchToProps = (dispatch) => ({
  getDragons: () => dispatch(DragonActions.getDragons()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)