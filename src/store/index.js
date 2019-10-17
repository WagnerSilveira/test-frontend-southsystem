import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './ducks/reducers';

export default createStore(reducers, applyMiddleware(thunk));
