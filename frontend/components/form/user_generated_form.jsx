import React from 'react';
import FieldLi from './user_form_field_li';
import { merge } from 'lodash';
import { removeFalse, orderFields } from '../../reducers/selectors';
import Modal from 'react-modal';

class UserGeneratedForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.password = this.password.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  componentDidMount() {
    this.props.clearStateValues();
    this.props.fetchUserForm(this.props.permanent_link).then( (action) => {
      let newCurrentForm = Object.assign({}, action.currentForm);
      newCurrentForm.fields = orderFields(action.currentForm.fields);
      this.setState({ currentForm: newCurrentForm }, () => {
        if (this.state.currentForm) {
          if (this.state.currentForm.private) {
            this.props.setIsOpen(true);
          }
        }
      });
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

  password(e) {
    this.setState({ password: e.currentTarget.value });
  }

  checkPassword() {
    this.props.checkPassword(this.state.currentForm.id, this.state.password);
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
        <div>
          <Modal
            isOpen={ this.props.isOpen }
            shouldCloseOnOverlayClick={false}
            contentLabel="Modal">
            <label>Password
              <input type="password" className="margin-left" onChange={ this.password } value={ this.state.password }/>
            </label>
            <button className="modal-button" onClick={ this.checkPassword }>Submit</button>
            <p className="modal-error">{ this.props.error }</p>
          </Modal>

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
