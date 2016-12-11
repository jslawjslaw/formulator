import React from 'react';

class Form extends React.Component {
  render() {
    debugger
    let fields;
    if (this.props.currentForm.fields) {
      fields = this.props.currentForm.fields.map( (field) => {
        return (
          <li key={ field.ord }>{ field.label }</li>
        );
      });
    } else {
      fields = [];
    }


    return(
      <section>
        <h1>Form BULLSHIT</h1>
        <ul>
          { fields }
        </ul>
      </section>
    );
  }
}

export default Form;
