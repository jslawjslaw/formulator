import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';

class FormLi extends React.Component {
  constructor(props) {
    super(props);

    this.makePrivate = this.makePrivate.bind(this);
    this.delete = this.delete.bind(this);
    this.linkToBuilder = this.linkToBuilder.bind(this);
  }

  makePrivate(e) {
    const newForm = merge({}, this.props.form, { private: true });
    this.props.makePrivate(newForm);
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
