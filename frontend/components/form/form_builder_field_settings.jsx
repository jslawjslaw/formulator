import React from 'react';
import merge from 'lodash/merge';

class fieldSettingsTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
      userInstruction: "",
      ord: "",
      fieldType: "",
      formId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.createField = this.createField.bind(this);
  }

  createField(e) {
    e.preventDefault();
    const field = {
      label: this.state.label,
      userInstruction: this.state.userInstruction,
      ord: this.state.ord,
      field_type: this.state.fieldType,
      form_id: this.state.formId
    };

    this.props.createField(field);
  }

  handleChange(e) {
    e.preventDefault();

  }

  render() {
    return (
      <form>
        <label>Input Type
          <input
            type="text"
            name="fieldType"
            onChange={ this.handleChange }
            value={ this.state.field_type }/>
        </label>
        <label>Label
          <input
            name="label"
            type="text"
            value={ this.state.label }/>
        </label>
        <label>User Instructions
          <input
            name="userInstructions"
            type="textarea"
            value={ this.state.user_instructions }/>
        </label>
        <button
          className="form-settings-button"
          onClick={ this.createField }>Create Field</button>
      </form>
    );
  }
}

export default fieldSettingsTab;