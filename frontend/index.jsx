import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveForm } from './util/form_api_util';
import { createForm } from './actions/form_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedstate = {
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedstate);
  } else {
    store = configureStore();
  }

  window.receiveForm = receiveForm;
  window.store = store;
  window.createForm = createForm;

  ReactDOM.render(<Root store={ store } />, root);
});
