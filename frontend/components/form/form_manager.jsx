import React from 'react';
import FormHeader from './form_header';
import Searchbar from './searchbar';

class FormManager extends React.Component {
  render() {
    return (
      <div>
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <section className="form-manager-section">
          <h1 className="form-name">Form Manager</h1>
          <button className="new-form-button">+ New Form</button>
        </section>

        <Searchbar forms={ this.props.forms } fetchForms={ this.props.fetchForms } />
      </div>
    );
  }
}

export default FormManager;
