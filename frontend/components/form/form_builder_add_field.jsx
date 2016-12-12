import React from 'react';

class AddField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "placeholder",
      field_type: "",
      user_instruction: "",
      choices: "",
      form_id: props.formId,
      ord: props.currentForm.fields.length
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.currentTarget.name === "single-line-text") {
      this.setState({ field_type: "text" }, () => {
        this.props.createField(this.state, this.props.formId);
      });
    } else if(e.currentTarget.name === "checkboxes") {
      this.setState({ field_type: "checkbox" }, () => {
        this.props.createField(this.state, this.props.formId);
      });
    } else if(e.currentTarget.name === "multiple-choice") {
      this.setState({ field_type: "radio", choices: "Choice 1^Choice 2^Choice 3^" }, () => {
        this.props.createField(this.state, this.props.formId);
      });
    } else if(e.currentTarget.name === "dropdown") {
      this.setState({ field_type: "select", choices: "Choice 1^Choice 2^Choice 3^" }, () => {
        this.props.createField(this.state, this.props.formId);
      });
    } else if(e.currentTarget.name === "paragraph") {
      this.setState({ field_type: "textarea" }, () => {
        this.props.createField(this.state, this.props.formId);
      });
    }
  }

  render() {
    return(
      <section>
        <h2>Standard</h2>
        <button
          onClick={ this.handleClick }
          name="single-line-text"
          className="add-field-button">Single Line Text</button>
        <button
          onClick={ this.handleClick }
          name="checkboxes"
          className="add-field-button">Checkboxes</button>
        <button
          onClick={ this.handleClick }
          name="multiple-choice"
          className="add-field-button">Multiple Choice</button>
        <button
          onClick={ this.handleClick }
          name="dropdown"
          className="add-field-button">Dropdown</button>
        <button
          onClick={ this.handleClick }
          name="paragraph"
          className="add-field-button">Paragraph</button>
      </section>
    );
  }
}

export default AddField;
