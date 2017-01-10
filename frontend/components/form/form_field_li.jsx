import React from 'react';

class FieldLi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radioValue: new Array(50),
      checkboxValue: [false, false, false, false, false, false, false, false, false, false],
      field: props.field
    };

    this.change = this.change.bind(this);
  }

  change(e, choice, idx) {
    if (this.state.field.field_type === 'textarea' ||
    this.state.field.field_type === 'text' ||
      this.state.field.field_type === 'select') {
        this.props.updateStateValues(this.state.field, e.currentTarget.value);
    } else if (this.state.field.field_type === 'radio') {
        this.props.updateStateValues(this.state.field, choice);
        let radioValue = new Array(50);
        if (this.state.radioValue[idx]) {
          radioValue[idx] = false;
          this.setState({ radioValue });
        } else {
          radioValue[idx] = true;
          this.setState({ radioValue });
        }
    } else if (this.state.field.field_type === 'checkbox') {
        let checkboxValue = Object.assign([], this.state.checkboxValue);
        let numChoices = this.state.field.choices.split("^").length - 1;
        checkboxValue = this.state.checkboxValue.slice(0, numChoices);
        if (checkboxValue[idx] === false) {
          checkboxValue[idx] = choice;
        } else {
          checkboxValue[idx] = false;
        }
        this.props.updateStateValues(this.state.field, checkboxValue);
        this.setState({ checkboxValue });
    }
  }

  wrappedChange(choice, idx) {
    return (e) => {
      this.change(e, choice, idx);
    };
  }

  render() {
    let input;
    if (this.props.field.field_type === 'radio') {
      let choices = this.props.field.choices.split("^");
      choices = choices.slice(0, choices.length - 1);
      choices = choices.map( (choice, idx) => {
        return (
          <div key={ idx }>
            <input
              onChange={ this.wrappedChange(choice, idx).bind(this) }
              className="user-form-field-input"
              checked={ this.state.radioValue[idx] }
              type={ this.props.field.field_type }/><span>{ choice }</span>
          </div>
        );
      });

      input = (
        <section>
          { choices }
        </section>
      );
    } else if (this.props.field.field_type === 'checkbox') {
      let choices = this.props.field.choices.split("^");
      choices = choices.slice(0, choices.length - 1);
      choices = choices.map( (choice, idx) => {
        return (
          <div key={ idx }>
            <input
              onChange={ this.wrappedChange(choice, idx).bind(this) }
              className="user-form-field-input"
              checked={ this.state.checkboxValue[idx] }
              type={ this.props.field.field_type }/><span>{ choice }</span>
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
        <select onChange={ this.change } className="user-form-field-input">
          { choices }
        </select>
      );
    } else if (this.props.field.field_type === 'textarea') {
      input = <textarea onChange={ this.change } className="user-form-field-input"></textarea>
    } else {
      input = <input onChange={ this.change } className="user-form-field-input" type={ this.props.field.field_type }/>
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
