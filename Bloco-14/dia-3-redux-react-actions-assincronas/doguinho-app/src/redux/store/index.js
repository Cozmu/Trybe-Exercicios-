import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import dogReducer from '../reducers/dogReducer';
import thunk from 'redux-thunk';

const store = createStore(dogReducer, 
  composeWithDevTools(applyMiddleware(thunk)));

export default store;