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
      <div className="body">
        <div className="forms-container">
          <div className="head-nav">
            <FormHeader logout={ this.props.logout } router={ this.props.router } />
          </div>

          <div className="stage">
            <section className="stage-info">
              <h1 className="form-name">Form Manager</h1>
              <button className="new-form-button" onClick={ this.handleClick }>+ New Form</button>
            </section>

            <div className="main-forms">
              <Searchbar
                forms={ this.props.forms }
                fetchForms={ this.props.fetchForms }
                deleteForm={ this.props.deleteForm }
                updateForm={ this.props.updateForm }
                fetchForm={ this.props.fetchForm }
                router={ this.props.router }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormManager;
