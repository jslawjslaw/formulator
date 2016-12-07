import React from 'react';
import Login from './login';
import Signup from './signup';

class Session extends React.Component {
  render() {
    let errors;
    if (this.props.errors.responseJSON) {
      errors = this.props.errors.responseJSON.map( (error, idx) => {
        return <li className="error-li" key={idx}>{error}</li>;
      });
    } else {
      errors = "";
    }

    if (this.props.formType === 'login') {
      return (
        <Login
          processForm={ this.props.processForm }
          errors={ errors }
          router={ this.props.router } />
      );
    } else {
      return(
        <Signup
          processForm={ this.props.processForm }
          errors={ errors }
          router={ this.props.router } />
      );
    }
  }
}

export default Session;
