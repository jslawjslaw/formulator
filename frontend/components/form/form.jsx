import React from 'react';
import FieldLi from './form_field_li';
import { Link } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.changeFieldIndex = this.changeFieldIndex.bind(this);
  }

  changeFieldIndex(newIndex) {
    this.props.changeFieldIndex(newIndex);
  }

  render() {
    let fields;
    if (this.props.currentForm.fields) {
      fields = this.props.currentForm.fields.map( (field) => {
        return (
          <li
            onClick={ () => this.changeFieldIndex(field.ord) }
            key={ field.ord }><FieldLi field={ field } /></li>
        );
      });
    } else {
      fields = [];
    }


    return(
      <section>
        <h1>{ this.props.currentForm.title }</h1>
        <h2>{ this.props.currentForm.description }</h2>
        <ul>
          { fields }
        </ul>
      </section>
    );
  }
}

export default Form;
