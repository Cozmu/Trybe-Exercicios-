import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { combineReducers, createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const renderWithRedux = (
    component,
    {
      initialState,
      store = createStore(
        combineReducers, //reducer que sendo usado
        initialState,
        applyMiddleware(thunk)
      ),
    } = {}
  ) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  });
  
  export default renderWithRedux;