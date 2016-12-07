import React from 'react';
import { Link } from 'react-router';

class FormHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout().then(() => this.props.router.push('/login'));
  }

  render() {
    return (
      <header>
        <nav>
          <h1>Formulator</h1>
          <ul>
            <li><Link to={ "/manager" } />Forms</li>
            <li><Link to={ "/reports" } />Reports</li>
            <li>
              <button onClick={ this.handleClick }>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default FormHeader;
