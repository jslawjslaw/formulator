import React from 'react';
import { Link } from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", username: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
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

  handleCancel(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

  render() {
    return(
      <div>
        <h1>Create powerful forms today.</h1>
        <Link to={"/login"}>Log In</Link>

        <ul>{ this.props.errors }</ul>

        <form>
          <label>Email:
            <input type="email" name="email" onChange={ this.handleChange }></input>
          </label>
          <br/>

          <label>Password:
            <input type="password" name="password" onChange={ this.handleChange }></input>
          </label>
          <br/>

          <label>Username:
            <input type="text" name="username" onChange={ this.handleChange }></input>
          </label>
          <br/>

          <button onClick={ this.handleSubmit }>Sign Up Free</button>
        </form>
        <button onClick={ this.handleCancel }>Cancel</button>
      </div>
    );
  }
}

export default Signup;
