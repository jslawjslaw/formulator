import React from 'react';
import FormHeader from './form_header';
import Searchbar from './form_searchbar';

class FormManager extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push('/build');
  }

  render() {
    return (
      <div>
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <section className="form-manager-section">
          <h1 className="form-name">Form Manager</h1>
          <button className="new-form-button" onClick={ this.handleClick }>+ New Form</button>
        </section>


        <Searchbar
          forms={ this.props.forms }
          fetchForms={ this.props.fetchForms }
          deleteForm={ this.props.deleteForm }
          updateForm={ this.props.updateForm }
          fetchForm={ this.props.fetchForm }
          router={ this.props.router }/>
      </div>
    );
  }
}

export default FormManager;
