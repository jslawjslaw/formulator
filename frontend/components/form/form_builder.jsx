import React from 'react';
import FormHeader from './form_header';
import merge from 'lodash/merge';

class FormBuilder extends React.Component {
  constructor(props) {
    super(props);

    const button = (props.route.path === "/build") ? "Create" : "Update";

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

  componentDidMount() {
    if (this.props.formId) {
      this.props.fetchForm(this.props.formId).then(({ currentForm }) => {
        this.setState({
          title: currentForm.title,
          description: currentForm.description,
          private: currentForm.private,
          permanent_link: currentForm.permanent_link
        });
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
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
      this.setState({ private: value });
      }
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
      this.props.createForm(form);
    } else {
      this.props.updateForm(form);
    }
  }

  render() {
    return (
      <div>
        <FormHeader logout={ this.props.logout } router={ this.props.router } />
        <h1>Form Builder</h1>

        <form>
          <label>Form Name
            <input
              type="text"
              name="title"
              onChange={ this.handleChange }
              value={ this.state.title } />
          </label>
          <label>Description
            <input
              type="textarea"
              name="description"
              onChange={ this.handleChange }
              value={ this.state.description } />
          </label>
          <input
            type="radio"
            name="private"
            value={ false }
            checked={ !this.state.private }
            onChange={ this.handleChange }/> Public
            <input
              type="radio"
              name="private"
              value={ true }
              checked={ this.state.private }
              onChange={ this.handleChange }/> Private
            <button onClick={ this.handleSubmit }>{ this.state.button }</button>
        </form>
      </div>
    );
  }
}

export default FormBuilder;
