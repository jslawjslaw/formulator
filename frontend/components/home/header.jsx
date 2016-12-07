import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="home-header">
        <nav className="home-nav group">
          <h1 className="home-h1">Formulator</h1>
          <Link className="home-nav-link" to={ "/login" }>
            <span className="home-login">Login</span>
            <span className="home-ahoy">Ahoy!</span>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
