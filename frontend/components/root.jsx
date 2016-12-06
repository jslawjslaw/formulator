import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
import SessionContainer from './session/session_container';



const Root = ({ store }) => {
  function ensureNotLoggedIn(_, replace) {
    const notLoggedIn = store.getState().session.currentUser;
    if (notLoggedIn) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer } />
          <Route path="/login" component={ SessionContainer } />
          <Route path="/signup" component={ SessionContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
