import React from 'react';
import { Link } from 'react-router';

class FormLi extends React.Component {
  constructor(props) {
    super(props);

    this.makePrivate = this.makePrivate.bind(this);
    this.delete = this.delete.bind(this);
    this.linkToBuilder = this.linkToBuilder.bind(this);
  }

  makePrivate(e) {
    this.props.makePrivate(this.props.form);
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
    return (
      <div>
        <h2>{ this.props.form.title }</h2>
        <ul>
          <li><button onClick={ this.linkToBuilder }>Edit</button></li>
          <li><button onClick={ this.makePrivate }>Make Private</button></li>
          <li><button onClick={ this.delete }>Delete</button></li>
        </ul>
      </div>
    );
  }
}

export default FormLi;
