import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

const appNode = document.createElement('div');

document.body.appendChild(appNode);

ReactDOM.render(
  <Provider store={store}>
        <App />
      </Provider>,
  appNode);
