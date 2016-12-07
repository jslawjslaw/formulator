import React from 'react';
import { Link } from 'react-router';
import Header from '../home/header';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", username: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/manager'));
  }

  handleChange(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    let username = this.state.username;

    if (e.currentTarget.name === "email") {
      this.setState({ email: e.currentTarget.value, password, username });
    } else if (e.currentTarget.name === "password"){
      this.setState({ password: e.currentTarget.value, email, username });
    } else {
      this.setState({ password, email, username: e.currentTarget.value });
    }
  }

  render() {
    return(
      <div>
        <Header />

        <div className="signup">
          <section className="signup-section">
            <h1 className="signup-header">Create powerful forms today.</h1>
            <form className="signup-form">
              <ul className="errors">{ this.props.errors }</ul>
              <label className="signup-label">Email Address
                <input className="signup-input" type="email" name="email" onChange={ this.handleChange }></input>
              </label>
              <label className="signup-label">Password
                <input className="signup-input" type="password" name="password" onChange={ this.handleChange }></input>
              </label>
              <label className="signup-label">Username
                <input className="signup-input" type="text" name="username" onChange={ this.handleChange }></input>
              </label>
              <button className="signup-button" onClick={ this.handleSubmit }>Sign Up Free</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Signup;
