import React from 'react';
import FormHeader from './form_header';

class FormBuilder extends React.Component {

  componentWillMount() {
    this.props.fetchForm(this.props.formId);
  }

  render() {
    return (
      <div>
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <h1>Form Builder</h1>
        <h1>{ this.props.formId }</h1>
      </div>
    );
  }
}

export default FormBuilder;
