import React from 'react';
import { Link } from 'react-router';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>This is your static home page, stupid.</h1>
        <Link to={"/login"}>Log In</Link>
        <br />
        <Link to={"/signup"}>Sign Up</Link>
      </div>
    );
  }
}

export default HomeContainer;
