import React from 'react';
import ReactDOM from 'react-dom';
import '.style/index.css';
import App from './container/App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import './style/index.css';

//获取store
let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>
  , document.getElementById('root'));

