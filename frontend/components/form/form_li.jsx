import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';

class FormLi extends React.Component {
  constructor(props) {
    super(props);

    this.updateForm = this.updateForm.bind(this);
    this.delete = this.delete.bind(this);
    this.linkToBuilder = this.linkToBuilder.bind(this);
  }

  updateForm(e) {
    let newForm;
    if (this.props.form.private) {
      newForm = merge({}, this.props.form, { private: false });
    } else {
      newForm = merge({}, this.props.form, { private: true });
    }
    this.props.updateForm(newForm, "index");
  }

  delete(e) {
    e.preventDefault();
    this.props.deleteForm(this.props.form.id);
  }

  linkToBuilder(e) {
    e.preventDefault();
    this.props.router.push(`/build/${this.props.form.id}`);
  }

  render() {
    let imageSrc = this.props.form.private ? window.lock : window.earth;
    let button = this.props.form.private ? "Make Public" : "Make Private";
    return (
      <div className="li-holder group">
        <Link to={`/build/${ this.props.form.id }`}>
          <img className="privacy-image" src={ imageSrc } />
          <h2 className="li-form-title">{ this.props.form.title }</h2>
        </Link>
        <ul className="li-ul group">
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.linkToBuilder }>Edit</button></li>
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.updateForm }>{ button }</button></li>
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.delete }>Delete</button></li>
        </ul>
      </div>
    );
  }
}

export default FormLi;
