import React from 'react';
import { Link } from 'react-router';

class FormHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.changeTabIndex = this.changeTabIndex.bind(this);
  }

  handleClick() {
    this.props.logout().then(() => this.props.router.push('/login'));
  }

  changeTabIndex() {
    this.props.changeTabIndex(0);
  }

  render() {
    return (
      <header className="form-header">
        <nav className="form-header-nav group">
          <h1 className="form-heading">Formulator</h1>
          <ul className="form-list">
            <li className="form-header-li" onClick={ this.changeTabIndex }><Link to="/manager">Forms</Link></li>
            <li className="form-header-li"><Link to="/reports">Reports</Link></li>
            <li className="form-header-li">
              <button className="form-header-button" onClick={ this.handleClick }>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default FormHeader;
