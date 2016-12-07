import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import SessionContainer from './session/session_container';
import FormManagerContainer from './form/form_manager_container';


const Root = ({ store }) => {
  function ensureLoggedIn(_, replace) {
    const loggedIn = store.getState().session.currentUser;
    if (!loggedIn) {
      replace('/');
    }
  }

  function redirectIfLoggedIn(_, replace) {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/manager');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" onEnter={ redirectIfLoggedIn } component={ App }>
          <IndexRoute component={ HomeContainer } />
          <Route path="/login" component={ SessionContainer } />
          <Route path="/signup" component={ SessionContainer } />
        </Route>
        <Route path="/manager" onEnter={ ensureLoggedIn } component={ FormManagerContainer } />
      </Router>
    </Provider>
  )
}

export default Root;
