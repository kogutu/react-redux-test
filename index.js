import React from 'react';
import {combineReducers } from 'redux'
import {createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './App';

import naszReducer from './magazyn';
import {reducer} from './produkty';
import {Provider} from 'react-redux';

let f= combineReducers({
  naszReducer,
  reducer
})
const store = createStore(
  f
)

ReactDOM.render(
  <Provider store = {store }>
  <App />
  </Provider>
  , document.getElementById('root'));
