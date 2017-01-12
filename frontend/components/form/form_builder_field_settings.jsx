import React from 'react';

class fieldSettingsTab extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.currentForm.fields.length) {
      this.state = {
        label: this.props.currentForm.fields[this.props.fieldIndex].label,
        user_instruction: this.props.currentForm.fields[this.props.fieldIndex].user_instruction,
        ord: this.props.currentForm.fields[this.props.fieldIndex].ord,
        choices: this.props.currentForm.fields[this.props.fieldIndex].choices,
        field_type: this.props.currentForm.fields[this.props.fieldIndex].field_type,
        form_id: this.props.currentForm.fields[this.props.fieldIndex].form_id,
        id: this.props.currentForm.fields[this.props.fieldIndex].id
      };

      this.state.error = "";
      this.state.choiceError = "";
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateField = this.updateField.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
    this.addChoice = this.addChoice.bind(this);
    this.removeChoice = this.removeChoice.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentForm.fields.length) {
      if (nextProps.fieldIndex < nextProps.currentForm.fields.length) {
        this.setState({
          label: nextProps.currentForm.fields[nextProps.fieldIndex].label,
          user_instruction: nextProps.currentForm.fields[nextProps.fieldIndex].user_instruction,
          ord: nextProps.currentForm.fields[nextProps.fieldIndex].ord,
          choices: nextProps.currentForm.fields[nextProps.fieldIndex].choices,
          field_type: nextProps.currentForm.fields[nextProps.fieldIndex].field_type,
          form_id: nextProps.currentForm.fields[nextProps.fieldIndex].form_id,
          id: nextProps.currentForm.fields[nextProps.fieldIndex].id,
          choiceError: ""
        });
      } else {
        this.setState({
          label: this.props.currentForm.fields[nextProps.fieldIndex].label,
          user_instruction: this.props.currentForm.fields[nextProps.fieldIndex].user_instruction,
          ord: this.props.currentForm.fields[nextProps.fieldIndex].ord,
          choices: this.props.currentForm.fields[nextProps.fieldIndex].choices,
          field_type: this.props.currentForm.fields[nextProps.fieldIndex].field_type,
          form_id: this.props.currentForm.fields[nextProps.fieldIndex].form_id,
          id: this.props.currentForm.fields[nextProps.fieldIndex].id,
          choiceError: ""
        });
      }
    }
  }

  updateChoice(idx) {
    return (e) => {
      if (!e.currentTarget.value.includes("^")) {
        let choices = this.state.choices.split("^");
        choices = choices.slice(0, choices.length-1);
        choices[idx] = e.currentTarget.value;
        choices = choices.join("^").concat("^");
        this.setState({ choices, choiceError: "" }, () => {
          this.props.updateStateField(this.state);
        });
      }
    }
  }

  addChoice(e) {
    e.preventDefault();
    if (this.state.choices.split("^").length - 1 < 10) {
      this.setState({ choices: this.state.choices.concat("^"), choiceError: "" }, () => {
        this.props.updateStateField(this.state);
      });
    } else {
      this.setState({ choiceError: "No more choices!" })
    }
  }

  removeChoice(idx) {
    return () => {
      let choices = this.state.choices.split("^");
      choices = choices.slice(0, choices.length-1);
      choices.splice(idx, 1);
      choices = choices.join("^").concat("^");
      this.setState({ choices, choiceError: "" }, () => {
        this.props.updateStateField(this.state);
      });
    }
  }

  updateField(e) {
    e.preventDefault();
      const field = {
      label: this.state.label,
      user_instruction: this.state.user_instruction,
      ord: this.state.ord,
      field_type: this.state.field_type,
      form_id: this.state.form_id,
      choices: this.state.choices,
      id: this.state.id
    };

    this.props.updateField(field).then(
      () => this.props.changeTabIndex(0),
      (action) => {
        this.setState({ error: "Avast ye! ".concat(action.errors.responseJSON[0]) });
      }
    );
  }

  deleteField(e) {
    e.preventDefault();
    const field = {
      label: this.state.label,
      user_instruction: this.state.user_instruction,
      ord: this.state.ord,
      field_type: this.state.field_type,
      form_id: this.state.form_id,
      choices: this.state.choices,
      id: this.state.id
    };

    if (this.props.fieldIndex !== 0) {
      this.props.changeFieldIndex(this.props.fieldIndex - 1);
    } else if (this.props.currentForm.fields.length > 1) {
      this.props.changeFieldIndex(1);
    }

    if (field.ord + 1 === this.props.currentForm.fields.length) {
      this.props.deleteField(field).then(() => {
        this.props.changeTabIndex(0);
      });
    } else {
      let fieldsToUpdate = [];
      this.props.currentForm.fields.forEach( (uField) => {
        if (uField.ord > field.ord) {
          uField.ord = uField.ord - 1;
          fieldsToUpdate.push(uField);
        }
      });

      this.props.deleteField(field).then(() => {
        fieldsToUpdate.forEach( (uField) => this.props.updateField(uField) )
      }).then(() => {
        this.props.changeTabIndex(0);
      });
    }

  }

  handleChange(e) {
    e.preventDefault();
    if (e.currentTarget.name === "label") {
      this.setState({ label: e.currentTarget.value, choiceError: "" }, () => {
        this.props.updateStateField(this.state);
      });
    } else if (e.currentTarget.name === "userInstructions") {
      this.setState({ user_instruction: e.currentTarget.value, choiceError: "" }, () => {
        this.props.updateStateField(this.state);
      });
    }
  }

  render() {
    let choices;
    if (!this.props.currentForm.fields.length) {
      return(
        <section className="nothing-to-see">
          <h1 className="red">Aarghh, nothing to see here...</h1>
          <img className="empty-treasure-image" src={ window.emptyTreasure } />
        </section>
      )
    } else {
      let choicesArray = this.state.choices.split("^");
      choicesArray = choicesArray.slice(0, choicesArray.length - 1);
      choices = choicesArray.map( (choice, idx) => {
        if(idx === 0) {
          return (
            <li
              className="choice-li"
              key={ idx }>
              <input
                className="choice-input"
                value={ choice }
                type="text"
                onChange={ this.updateChoice(idx) }/>
              <button onClick={ this.addChoice }><img className="lonely-green-plus" src={ window.greenPlus } /></button>
            </li>
          )
        } else {
          return (
            <li
              className="choice-li"
              key={ idx }>
              <input
                className="choice-input"
                value={ choice }
                type="text"
                onChange={ this.updateChoice(idx) }/>
              <div className="button-block">
                <button onClick={ this.addChoice }><img className="green-plus" src={ window.greenPlus } /></button>
                <button onClick={ this.removeChoice(idx) }><img className="red-minus" src={ window.redMinus } /></button>
              </div>
            </li>
          );
        }
      });
    }

    let fieldset;
    if (choices.length) {
      fieldset = (
        <fieldset className="choices-fieldset">
          <legend className="choices-legend">Choices</legend>
          <ul className="choices-ul">
            { choices }
          </ul>
          <p className="field-error choice-error">{ this.state.choiceError }</p>
        </fieldset>
      );
    } else {
      fieldset = "";
    }

    const userInstruction = this.state.user_instruction || "";

    return (
      <form>
        <label className="field-settings-label">Input Type
          <input
            className="field-settings-input"
            type="text"
            name="fieldType"
            readOnly
            value={ this.state.field_type }/>
        </label>
        <label className="field-settings-label">Label
          <input
            className="field-settings-input"
            name="label"
            type="text"
            onChange={ this.handleChange }
            value={ this.state.label }/>
            <p className="field-error">{ this.state.error }</p>
        </label>
        <label className="field-settings-label">Position
          <input
            className="field-settings-input"
            name="label"
            type="text"
            readOnly
            value={ this.state.ord }/>
        </label>
        <label className="field-settings-label">User Instructions
          <textarea
            className="field-settings-textarea"
            name="userInstructions"
            onChange={ this.handleChange }
            value={ userInstruction }/>
        </label>
        { fieldset }
        <button
          className="field-settings-button"
          onClick={ this.updateField }>Update Field</button>
        <button
          className="field-settings-button red"
          onClick={ this.deleteField }>Delete Field</button>
      </form>
    );
  }
}

export default fieldSettingsTab;
