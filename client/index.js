import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import { App } from './exports';
// import store from './store';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById('root') // make sure this is the same as the id of the div in your index.html
);
