import React from 'react';
import merge from 'lodash/merge';

class fieldSettingsTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
      userInstruction: "",
      ord: "",
      choices: "",
      fieldType: "",
      formId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentWillMount() {
    this.setState({
      label: this.props.currentForm.fields[0].label,
      userInstruction: this.props.currentForm.fields[0].user_instruction,
      ord: 0,
      choices: this.props.currentForm.fields[0].choices,
      fieldType: this.props.currentForm.fields[0].field_type,
      formId: this.props.formId
    });
  }

  updateField(e) {
    e.preventDefault();
    const field = {
      label: this.state.label,
      userInstruction: this.state.userInstruction,
      ord: this.state.ord,
      field_type: this.state.fieldType,
      form_id: this.state.formId
    };

    this.props.updateField(field, this.state.form_id);
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
            value={ this.state.userInstructions }/>
        </label>
        <button
          className="form-settings-button"
          onClick={ this.updateField }>Update Field</button>
      </form>
    );
  }
}

export default fieldSettingsTab;
