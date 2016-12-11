import React from 'react';
import merge from 'lodash/merge';

class FormSettings extends React.Component {
  constructor(props) {
    super(props);
    const button = (props.formId) ?  "Update" : "Create";

    this.state = {
      title: "",
      description: "",
      private: "",
      permanent_link: "",
      author_id: props.userId,
      button
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.currentForm.title,
      description: nextProps.currentForm.description,
      private: nextProps.currentForm.private,
      permanent_link: nextProps.currentForm.permanent_link,
      author_id: nextProps.currentForm.author_id
    })
  }

  handleChange(e) {
    let newState = Object.assign({}, this.state);

    if (e.currentTarget.name === "title") {
      this.setState({ title: e.currentTarget.value });
    } else if (e.currentTarget.name === "description") {
      this.setState({ description: e.currentTarget.value });
    } else if (e.currentTarget.name === "private") {
      let value;
      if (e.currentTarget.value === "false") {
        value = false;
      } else {
        value = true;
      }
      this.setState({ private: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = {
      title: this.state.title,
      description: this.state.description,
      author_id: this.state.author_id,
      permanent_link: this.state.permanent_link,
      private: this.state.private,
      id: this.props.formId
    };

    if (this.state.button === "Create") {
      if (this.state.private === "") {
        form.private = false;
      }
      this.props.createForm(form).then(() => this.props.router.push('/manager'));
    } else {
      this.props.updateForm(form);
    }
  }

  render() {
    return (
      <form className="form-settings-pane">
        <label className="form-settings-label">Form Name
          <input
            className="form-settings-input-text"
            type="text"
            name="title"
            onChange={ this.handleChange }
            value={ this.state.title } />
        </label>
        <label className="form-settings-label">Description
          <input
            className="form-settings-input-textarea"
            type="textarea"
            name="description"
            onChange={ this.handleChange }
            value={ this.state.description } />
        </label>
        <input
          className="form-settings-radio"
          type="radio"
          name="private"
          value={ false }
          checked={ !this.state.private }
          onChange={ this.handleChange }/><span> Public</span>
          <br />
          <input
            className="form-settings-radio"
            type="radio"
            name="private"
            value={ true }
            checked={ this.state.private }
            onChange={ this.handleChange }/><span> Private</span>
          <button
            className="form-settings-button"
            onClick={ this.handleSubmit }>{ this.state.button }</button>
      </form>
    );
  }
}

export default FormSettings;
