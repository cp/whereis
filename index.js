import React from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import App from './lib/components/App';
import { Provider } from 'react-redux'
import Store from './lib/Store';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
