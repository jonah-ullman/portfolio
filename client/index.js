import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  // <Provider store={store}>
  <div>
    <div>React is up and running</div>
    <Router>
      <div>'aaaaahhhhh'</div>
      <div>React is up and running</div>
    </Router>
  </div>,

  // </Provider>,

  document.getElementById('app')
);
