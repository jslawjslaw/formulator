import React from 'react';

class FieldLi extends React.Component {
  render() {
    let input;
    if (this.props.field.field_type === 'radio' ||
          this.props.field.field_type === 'checkbox') {
      let choices = this.props.field.choices.split("^");
      choices = choices.slice(0, choices.length - 1);
      choices = choices.map( (choice, idx) => {
        return (
          <div key={ idx }>
            <input
              className="user-form-field-input"
              type={ this.props.field.field_type }
              value={ choice }/><span>{ choice }</span>
          </div>
        );
      });

      input = (
        <section>
          { choices }
        </section>
      );
    } else if (this.props.field.field_type === 'select') {
      let choices = this.props.field.choices.split("^");
      choices = choices.slice(0, choices.length - 1);
      choices = choices.map( (choice, idx) => {
        return (
          <option
            key={ idx }
            value={ choice }>{ choice }</option>
        );
      });

      input = (
        <select className="user-form-field-input">
          { choices }
        </select>
      );
    } else {
      input = <input className="user-form-field-input" type={ this.props.field.field_type } />
    }
    return (
      <section>
        <p className="user-form-field-label">{ this.props.field.label }</p>
        <p className="user-form-field-label">{ this.props.field.user_instruction }</p>
        { input }
      </section>
    );
  }
}

export default FieldLi;
