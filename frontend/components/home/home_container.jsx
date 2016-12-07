import React from 'react';
import { Link } from 'react-router';
import Header from './header';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
