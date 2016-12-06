import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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

  ReactDOM.render(<Root store={ store } />, root);
});
