import React from 'react';
import { Link } from 'react-router';

class FormLi extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.linkToBuilder = this.linkToBuilder.bind(this);
    this.linkToSubmissions = this.linkToSubmissions.bind(this);
  }

  delete(e) {
    e.preventDefault();
    this.props.deleteForm(this.props.form.id);
  }

  linkToBuilder(e) {
    e.preventDefault();
    this.props.router.push(`/build/${this.props.form.id}`);
  }

  linkToSubmissions(e) {
    e.preventDefault();
    this.props.router.replace("/manager");
    this.props.router.push(`/submissions/${this.props.form.id}`);
  }

  render() {
    let imageSrc = this.props.form.private ? window.lock : window.earth;
    let button = this.props.form.private ? "Make Public" : "Make Private";
    return (
      <div className="li-holder a-group">
        <Link className="form-title-link" to={`/build/${ this.props.form.id }`}>
          <img className="privacy-image" src={ imageSrc } />
          <h2 className="li-form-title">{ this.props.form.title }</h2>
        </Link>
        <ul className="li-ul group">
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.linkToBuilder }>Edit</button></li>
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.linkToSubmissions }>Submissions</button></li>
          <li className="li-buttons"><button className="form-search-li-button" onClick={ this.delete }>Delete</button></li>
        </ul>
      </div>
    );
  }
}

export default FormLi;
