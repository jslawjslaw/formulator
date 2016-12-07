import React from 'react';
import FormHeader from './form_header';

class FormManager extends React.Component {
  render() {
    return (
      <FormHeader logout={ this.props.logout } router={ this.props.router } />
    );
  }
}

export default FormManager;
