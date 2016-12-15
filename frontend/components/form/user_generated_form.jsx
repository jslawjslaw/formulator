import React from 'react';
import FieldLi from './form_field_li';
import merge from 'lodash.merge'
import { removeFalse } from '../../reducers/selectors';

class UserGeneratedForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearStateValues();
    this.props.fetchUserForm(this.props.permanent_link).then( (action) => {
      this.setState({ currentForm: action.currentForm });
    });
  }

// this needs to create a bunch of entries and a submission
  handleSubmit(e) {
    let obj = {};
    let newValues = merge([], this.props.values);
    this.state.currentForm.fields.forEach( (field, idx) => {
      if (Array.isArray(newValues[idx])) {
        obj[field.id] = removeFalse(newValues[idx]);
      } else {
        obj[field.id] = newValues[idx];
      }
    });
    this.props.createSubmission(this.state.currentForm.id, obj, this.props.router);
  }

  render() {
    if (this.state.currentForm.fields) {
      let fields = this.state.currentForm.fields.map( (field) => {
        return (
          <li
            key={ field.ord }>
            <FieldLi updateStateValues={ this.props.updateStateValues } field={ field }/>
          </li>
        );
      });
      return (
        <div className="user-generated-form-show">
          <div className="container">
            <h1 className="user-generated-form-show-logo">Formulator</h1>
            <section className="user-generated-form-head">
              <h1 className="user-form-title">{ this.state.currentForm.title}</h1>
              <p className="user-form-description">{ this.state.currentForm.description }</p>
            </section>
            <form className="the-form">
              <ul className="the-fields">
                { fields }
              </ul>
              <button className="submit-button" onClick={ this.handleSubmit }>Submit</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default UserGeneratedForm;
