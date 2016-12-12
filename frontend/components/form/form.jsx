import React from 'react';
import FieldLi from './form_field_li';

class Form extends React.Component {
  
  render() {
    let fields;
    if (this.props.currentForm.fields) {
      fields = this.props.currentForm.fields.map( (field) => {
        return (
          <li key={ field.ord }><FieldLi field={ field } /></li>
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
