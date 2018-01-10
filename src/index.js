import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { setState } from './action_creators';

const store = createStore(reducer);

const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
