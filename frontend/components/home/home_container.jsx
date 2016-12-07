import React from 'react';
import { Link } from 'react-router';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <header className="home-header">
          <nav className="home-nav group">
            <h1 className="home-h1">Formulator</h1>
            <Link className="home-nav-link" to={ "/login" }>
              <span className="home-login">Login</span>
              <span className="home-ahoy">Ahoy!</span>
            </Link>
          </nav>
        </header>
        <div className="home-title-container">
          <section className="home-section group">
            <h1 className="home-section-h1">Create and share your forms.</h1>
            <Link className="home-section-link" to={ "/signup" }>Sign Up</Link>
            <img className="home-title-pirate" src={ window.pirateImage } />
          </section>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
