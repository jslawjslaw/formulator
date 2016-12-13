import React from 'react';
import merge from 'lodash/merge';

class fieldSettingsTab extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.currentForm.fields.length) {
      this.state = {
        label: this.props.currentForm.fields[this.props.fieldIndex].label,
        userInstruction: this.props.currentForm.fields[this.props.fieldIndex].user_instruction,
        ord: this.props.currentForm.fields[this.props.fieldIndex].ord,
        choices: this.props.currentForm.fields[this.props.fieldIndex].choices,
        fieldType: this.props.currentForm.fields[this.props.fieldIndex].field_type,
        formId: this.props.currentForm.fields[this.props.fieldIndex].form_id,
        id: this.props.currentForm.fields[this.props.fieldIndex].id
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(e) {
    e.preventDefault();
    const field = {
      label: this.state.label,
      user_instruction: this.state.userInstruction,
      ord: this.state.ord,
      field_type: this.state.fieldType,
      form_id: this.state.formId,
      choices: this.state.choices,
      id: this.state.id
    };

    this.props.updateField(field);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.currentTarget.name === "label") {
      this.setState({ label: e.currentTarget.value });
    } else if (e.currentTarget.name === "userInstructions") {
      this.setState({ userInstruction: e.currentTarget.value });
    }
  }

  render() {
    if (!this.props.currentForm.fields.length) {
      return(
        <section className="nothing-to-see">
          <h1 className="red">Nothing to see here...</h1>
        </section>
      )
    }
    return (
      <form>
        <label>Input Type
          <input
            type="text"
            name="fieldType"
            readOnly
            defaultValue={ this.state.fieldType }/>
        </label>
        <label>Label
          <input
            name="label"
            type="text"
            onChange={ this.handleChange }
            value={ this.state.label }/>
        </label>
        <label>User Instructions
          <input
            name="userInstructions"
            type="textarea"
            onChange={ this.handleChange }
            value={ this.state.userInstruction }/>
        </label>
        <button
          className="form-settings-button"
          onClick={ this.updateField }>Update Field</button>
      </form>
    );
  }
}

export default fieldSettingsTab;
